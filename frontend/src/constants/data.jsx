import React from "react";
import {
  IconWrapper,
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  UserIcon,
  EnvelopeIcon,
  NewspaperIcon,
  LinkIcon,
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  SparklesIcon,
  DesktopComputerIcon,
  ServerIcon,
  DatabaseIcon,
  CubeTransparentIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  DownloadIcon,
  TrophyIcon,
} from "../components/icons";

const DUMMY_USER_DATA = {
  name: "Happy Yadav",
  title: "MERN Stack Developer",
  email: "happy.yadav.contact@gmail.com",
  phone: "+91 8299007827",
  linkedin: "https://linkedin.com/in/happyyadav/",
  github: "https://github.com/Happyyadav007",
  leetcode: "https://leetcode.com/u/Happyyadav077/",
  cvLink: "/Happy_Yadav_Resume.pdf",
  heroSummary:
    "Innovative MERN Stack Developer specializing in scalable web applications and secure backend systems. Passionate about crafting high-performance, elegant user experiences with React, Node.js, and MongoDB.",
  aboutMe: [
    "Hello! I'm Happy Yadav, a dedicated MERN Stack Developer with a strong enthusiasm for building efficient, scalable, and user-centric web applications. My journey in the tech world is fueled by an insatiable curiosity for how things work and a profound desire to create solutions that genuinely make a difference.",
    "I excel in collaborative team environments and relish the opportunity to tackle complex technical challenges. With a robust foundation in JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB, I am perpetually driven to explore emerging technologies and refine my skillset. My core philosophy revolves around writing clean, maintainable, and high-performing code.",
    "Currently, as a MERN Stack Developer Intern at Sankhyana Consultancy Services Pvt. Ltd., I am actively involved in developing and optimizing backend APIs, implementing robust security measures, and constructing responsive, intuitive frontend interfaces. I am always eager to contribute my skills to impactful projects and innovative teams.",
  ],
  experience: [
    {
      id: "exp1",
      company: "Sankhyana Consultancy Services Pvt. Ltd.",
      role: "MERN Stack Developer Intern",
      period: "Feb 2025 - Present",
      location: "Remote, India",
      description: [
        "Contributed to the development of an AI-powered CRM platform with features like lead management, performance tracking, and in-platform product sales.",
        "Built interactive dashboards with real-time analytics (pie charts, line graphs) to visualize employee and lead performance.",
        "Enabled organization onboarding with employee hierarchy (Manager, Team Lead, Telecaller) and secure role-based access.",
        "Integrated Google Gemini AI to generate email suggestions tailored to customers.",
        "Developed product management and invoice generation features to support CRM sales operations.",
        "Revamped the Sankhyana company website with an admin dashboard to manage job listings, blogs, news, and online courses.",
        "Built and consumed secure REST APIs using Node.js, Express.js, and MongoDB, and developed responsive frontends using React.js and Tailwind CSS.",
      ],
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Tailwind CSS",
        "API Development",
        "JWT",
        "RBAC",
        "AI Integration",
        "Data Visualization",
        "Responsive Design",
        "Version Control (Git)",
        "Shad/CN"
      ],
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "CodeNode | Ed-Tech Backend Application",
      category: "Backend Development",
      shortDescription:
        "Robust backend for an Ed-Tech platform supporting diverse user roles and functionalities.",
      tech: [
        "Node.js",
        "MongoDB Atlas",
        "Cloudinary",
        "Express.js",
        "JWT",
        "REST APIs",
      ],
      longDescription:
        "Developed a cutting-edge Backend web application for an educational platform, facilitating seamless interactions among Administrators, Students, and Instructors. Implemented a robust cloud-based database infrastructure using MongoDB Atlas, ensuring scalability and reliability for dynamic content management. Developed backend functionality to enable instructors to securely upload and manage courses and lectures on Cloudinary, ensuring seamless content storage and retrieval for an enhanced learning experience. Facilitated efficient enrollment processes and course management functionalities for both Administrators and Instructors, optimizing workflow efficiency and user satisfaction.",
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=CodeNode+Project&font=inter",
      sourceLink:
        "https://github.com/Happyyadav007/CodeNode---Ed-Tech-Backend-Application",
      liveLink: null,
      features: [
        "Role-based access (RBAC)",
        "Course & Lecture Management",
        "Secure Cloudinary Uploads",
        "MongoDB Atlas Integration",
        "Scalable API Design",
      ],
    },
    {
      id: "proj2",
      name: "AI-Powered Email Generator",
      category: "Full-Stack Development",
      shortDescription:
        "MERN stack application leveraging Google Gemini AI for intelligent email composition.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini AI",
        "Nodemailer",
        "Multer",
      ],
      longDescription:
        "Built a MERN stack app integrating Google Gemini AI for AI-powered email generation. Integrated Nodemailer for seamless email delivery and Multer for secure file uploads, allowing attachments before sending. Implemented a draft-saving feature using MongoDB, enabling users to store and manage emails for later use. Developed a responsive React.js frontend for a smooth user experience, ensuring efficient email management.",
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=AI+Email+Generator&font=inter",
      sourceLink: "https://github.com/Happyyadav007/AI-Powered-Email-Generator",
      liveLink: null,
      features: [
        "AI-driven Email Generation",
        "Secure File Attachments (Multer)",
        "Email Drafts & Storage",
        "Nodemailer Integration",
        "Responsive UI/UX",
      ],
    },
    {
      id: "proj3",
      name: "Weather App",
      category: "Frontend Development",
      shortDescription:
        "Responsive web application providing real-time weather information using OpenWeatherMap API.",
      tech: [
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "Javascript (ES6+)",
        "OpenWeatherMap API",
      ],
      longDescription:
        "Crafted a responsive and visually appealing web application using HTML, CSS, and Tailwind CSS, showcasing a strong command of modern front-end technologies. Integrated the OpenWeatherMap API to fetch and display up-to-date weather information, including temperature, humidity, and conditions for any location.",
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=Weather+App&font=inter",
      sourceLink: "https://github.com/Happyyadav007/Weather-App",
      liveLink: "https://happyyadav007.github.io/Weather-App/",
      features: [
        "Real-time Weather Data",
        "Global Location Search",
        "Dynamic UI Updates",
        "Responsive Design",
        "Third-party API Integration",
      ],
    },
    {
      id: "proj4",
      name: "AuthBackend App",
      category: "Backend Development",
      shortDescription:
        "Secure and scalable backend system for user authentication and session management.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cookie-based Sessions",
        "Bcrypt",
      ],
      longDescription:
        "Developed a secure and scalable backend application using Express.js and MongoDB, providing login and signup functionalities with robust authentication. Implemented JWT-based token authentication and cookie-based session management to ensure secure user access and reliable API communication. Designed RESTful APIs for seamless integration with frontend systems, enabling efficient user authentication and data exchange. Optimized database operations with MongoDB for efficient data retrieval and secure storage, ensuring application scalability and performance.",
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=AuthBackend+App&font=inter",
      sourceLink: "https://github.com/Happyyadav007/AuthBackend-App",
      liveLink: null,
      features: [
        "JWT & Cookie Authentication",
        "Password Hashing (Bcrypt)",
        "RESTful API Design",
        "Scalable Architecture",
        "Data Security Best Practices",
      ],
    },
  ],
  skills: {
    languages: {
      name: "Languages",
      items: ["Java", "Javascript (ES6+)", "Python (Basic)"],
      icon: () => <CodeBracketIcon />,
    },
    frontend: {
      name: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "React.js",
        "TailwindCSS",
        "Bootstrap5",
        "Redux (Toolkit)",
      ],
      icon: () => <DesktopComputerIcon />,
    },
    backend: {
      name: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs"],
      icon: () => <ServerIcon />,
    },
    databases: {
      name: "Databases",
      items: ["MongoDB", "MySQL", "Mongoose ODM"],
      icon: () => <DatabaseIcon />,
    },
    tools: {
      name: "Tools & Platforms",
      items: [
        "VS Code",
        "Git",
        "Github",
        "Vercel",
        "Render",
        "Postman",
        "Linux",
        "Docker (Basic)",
      ],
      icon: () => <CubeTransparentIcon />,
    },
  },
  services: [
    {
      id: "serv1",
      title: "Full-Stack Web Development",
      description:
        "Building complete web applications from front-end to back-end using the MERN stack (MongoDB, Express.js, React, Node.js). I focus on creating responsive, scalable, and maintainable solutions tailored to your needs.",
      icon: () => <CodeBracketIcon className="w-10 h-10 text-purple-400" />,
      tags: ["MERN", "React", "Node.js", "MongoDB", "Full-Stack"],
    },
    {
      id: "serv2",
      title: "Frontend Development",
      description:
        "Crafting beautiful, interactive, and user-friendly interfaces with React.js and modern CSS frameworks like Tailwind CSS. Ensuring optimal performance and accessibility across all devices.",
      icon: () => <DesktopComputerIcon className="w-10 h-10 text-purple-400" />,
      tags: ["React.js", "TailwindCSS", "HTML5", "CSS3", "UI/UX"],
    },
    {
      id: "serv3",
      title: "Backend API Development",
      description:
        "Designing and developing robust, secure, and scalable RESTful APIs using Node.js and Express.js. Integrating with databases like MongoDB and ensuring efficient data management.",
      icon: () => <ServerIcon className="w-10 h-10 text-purple-400" />,
      tags: ["Node.js", "Express.js", "API Design", "MongoDB", "Security"],
    },
    {
      id: "serv4",
      title: "Database Management",
      description:
        "Working with MongoDB and MySQL to design database schemas, optimize queries, and ensure data integrity and security for your applications.",
      icon: () => <DatabaseIcon className="w-10 h-10 text-purple-400" />,
      tags: ["MongoDB", "MySQL", "Mongoose", "Data Modeling"],
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Computer Application (MCA)",
      institution: "Greater Noida Institute of Technology, Delhi-NCR",
      period: "2022 - 2024",
      details:
        "Focused on advanced software development, database management, web technologies, and data structures & algorithms.",
    },
    {
      id: "edu2",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Dr. Rammanohar Lohia Avadh University, Ayodhya",
      period: "2018 - 2021",
      details:
        "Gained a strong foundation in computer science fundamentals, programming paradigms, and database concepts.",
    },
  ],
  blogPosts: [
    {
      id: "blog1",
      title: "The Rise of MERN Stack: Why It's My Go-To",
      date: "May 05, 2025",
      excerpt:
        "Exploring the power and flexibility of MongoDB, Express.js, React, and Node.js for modern web development...",
      content:
        "<p>The MERN stack has become increasingly popular for a reason. Its JavaScript-centric nature allows for seamless development across both frontend and backend. In this post, I'll dive into why I prefer MERN for many of my projects.</p><h3>Advantages:</h3><ul><li><strong>Single Language:</strong> JavaScript everywhere simplifies context switching.</li><li><strong>Rich Ecosystem:</strong> NPM provides a vast library of packages.</li><li><strong>Performance:</strong> Node.js is non-blocking and efficient. React's virtual DOM ensures fast UI updates.</li><li><strong>Community Support:</strong> Large and active communities mean plenty of resources and help.</li></ul><p>Future enhancements could involve exploring GraphQL integration or serverless architectures with MERN.</p>",
      tags: ["MERN", "JavaScript", "Web Development", "React", "Node.js"],
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=MERN+Stack&font=inter",
    },
    {
      id: "blog2",
      title: "Building Secure Backends with Node.js and JWT",
      date: "April 28, 2025",
      excerpt:
        "A look into implementing JWT for authentication and best practices for Node.js API security...",
      content:
        "<p>Security is paramount in backend development. JSON Web Tokens (JWT) offer a stateless and secure way to handle authentication. This post covers the basics of implementing JWT in a Node.js and Express.js application.</p><h3>Key Steps:</h3><ol><li>User logs in with credentials.</li><li>Server verifies credentials and issues a JWT.</li><li>Client stores the JWT (e.g., in localStorage or HttpOnly cookie).</li><li>Client sends JWT in the Authorization header for subsequent requests.</li><li>Server verifies the JWT on protected routes.</li></ol><p>Remember to use strong secret keys, handle token expiration, and consider refresh tokens for enhanced security.</p>",
      tags: ["Node.js", "Security", "JWT", "API", "Backend"],
      imageUrl:
        "https://placehold.co/600x400/0F172A/A78BFA?text=Node.js+Security&font=inter",
    },
  ],
  achievements: [
    {
      id: "ach1",
      name: "Certified Software Engineer - IT Services",
      issuer: "AMCAT",
      date: "Dec 2024",
      description:
        "Validated skills in software engineering principles, data structures, and algorithms through a comprehensive assessment.",
    },
    {
      id: "ach2",
      name: "Certified Software Development Trainee",
      issuer: "AMCAT",
      date: "Nov 2024",
      description:
        "Successfully completed intensive training focused on modern software development practices and tools.",
    },
    {
      id: "ach3",
      name: "LeetCode Knight Badge",
      issuer: "LeetCode",
      date: "Ongoing",
      description:
        "Achieved Knight badge by solving 200+ problems, demonstrating strong problem-solving and algorithmic skills.",
    },
    {
      id: "ach4",
      name: "Top Performer - College Hackathon",
      issuer: "GNIOT",
      date: "Mar 2023",
      description:
        "Led a team to develop an innovative solution for [Problem Statement], securing a top 3 position among 50+ teams.",
    },
  ],
  testimonials: [
    {
      id: "test1",
      quote:
        "Happy is an incredibly talented and dedicated developer. His problem-solving skills and commitment to quality are truly commendable. He was a valuable asset to our project.",
      author: "Shivani Parmar",
      role: "Team Lead, Sankhyana Consultancy",
      avatarUrl:
        "https://placehold.co/100x100/0F172A/E0E7FF?text=SP&font=inter",
    },
    {
      id: "test2",
      quote:
        "Working with Happy was a fantastic experience. He's a quick learner, highly proficient in MERN stack, and always brings a positive attitude. His contributions significantly improved our application's performance.",
      author: "Harish Srinivasan",
      role: "Senior Developer, Sankhyana Consultancy",
      avatarUrl:
        "https://placehold.co/100x100/0F172A/E0E7FF?text=HS&font=inter",
    },
    {
      id: "test3",
      quote:
        "Happy's ability to quickly grasp complex requirements and translate them into clean, efficient code is impressive. He's a great team player and a joy to collaborate with.",
      author: "Badal Behera",
      role: "Software Developer, Sankhyana Consultancy",
      avatarUrl:
        "https://placehold.co/100x100/0F172A/E0E7FF?text=BB&font=inter",
    },
  ],
};

export default DUMMY_USER_DATA;
