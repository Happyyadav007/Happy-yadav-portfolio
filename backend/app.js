import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Specific origin instead of *
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Rate Limiting (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/contact', limiter);

// MongoDB Connection with improved settings
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Enhanced Contact Schema with validation
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: props => `${props.value} is not a valid email address!`
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Email Transporter with better configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  pool: true,
  maxConnections: 1,
  rateDelta: 20000, // 20 seconds between emails
  rateLimit: 5 // max 5 emails per rateDelta
});

app.get('/', (req, res) => {
  res.send({ message: 'API is running' });
});


// API endpoint with enhanced error handling
app.post('/api/contact', async (req, res) => {
  try {
    // console.log('Received contact form submission:', req.body);
    const { name, email, message } = req.body;


    // Additional validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Email templates with HTML versions
    const mailOptionsToYou = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    const mailOptionsToSubmitter = {
      from: `"${process.env.EMAIL_NAME || 'Contact Form'}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hi ${name},\n\nThank you for reaching out! We've received your message and will get back to you soon.\n\nBest regards,\n${process.env.EMAIL_NAME || 'Our Team'}`,
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We've received your message and will get back to you soon.</p>
        <p>Best regards,<br>${process.env.EMAIL_NAME || 'Our Team'}</p>
      `
    };

    // Send emails with error handling
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSubmitter)
    ]);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Error:', error);
    
    let errorMessage = 'Error processing your request';
    let statusCode = 500;

    if (error.name === 'ValidationError') {
      errorMessage = Object.values(error.errors).map(e => e.message).join(', ');
      statusCode = 400;
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Email service configuration error';
    }

    res.status(statusCode).json({ 
      success: false, 
      message: errorMessage 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});