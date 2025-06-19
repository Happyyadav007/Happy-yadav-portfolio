import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EnvelopeIcon } from '../../icons';
import DUMMY_USER_DATA from '../../../constants/data';
import { Button } from '../../common/Button';
import { PageWrapper } from '../../common/PageWrapper';


const API_URL = import.meta.env.VITE_BACKEND_API_URL;

// Debugging - check if env variable is loading
console.log("Environment Variables:", import.meta.env);
console.log("API URL:", API_URL);

const API = `${API_URL}/api/contact`;

export const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setError('');
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setIsSubmitted(false);

  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    setError("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }
  // console.log("formdata", formData);

  try {
    const response = await fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    // console.log('Response:', data);

    if (data.success) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError(data.message || "Failed to send message");
    }
  } catch (err) {
    setError("Network error. Please try again later.");
    console.error('Error:', err);
  }
};

  return (
    <PageWrapper title="Contact Me">
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-slate-800/80 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl fade-in-section">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2 text-center">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-400 mb-8 text-center">
              I'm excited to hear about your project ideas or collaboration opportunities. Let's build something great together!
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-600 text-white text-center shadow-md">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-500 text-white text-center shadow-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 text-slate-200 placeholder-slate-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="e.g., Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 text-slate-200 placeholder-slate-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 text-slate-200 placeholder-slate-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full !py-3 text-base"
                >
                  Send Message
                </Button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-700/50 text-center text-slate-400">
              <p className="mb-3 text-lg">Alternatively, reach out directly:</p>
              <div className="space-y-2">
                <p className="flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2 text-purple-400"/> 
                  <a 
                    href={`mailto:${DUMMY_USER_DATA.email}`} 
                    className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                  >
                    {DUMMY_USER_DATA.email}
                  </a>
                </p>
                {DUMMY_USER_DATA.phone && (
                  <p className="flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-5 h-5 mr-2 text-purple-400"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" 
                      />
                    </svg>
                    <a 
                      href={`tel:${DUMMY_USER_DATA.phone}`} 
                      className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                    >
                      {DUMMY_USER_DATA.phone}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

ContactPage.propTypes = {
  navigateTo: PropTypes.func
};