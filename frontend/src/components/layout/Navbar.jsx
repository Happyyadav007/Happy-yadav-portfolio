import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common';
import DUMMY_USER_DATA from '../../constants/data';

export const Navbar = ({ navigateTo, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", page: "HomePage" },
    { name: "Services", page: "ServicesPage"},
    { name: "Projects", page: "ProjectListPage" },
    { name: "Resume", page: "ResumePage"},
    // { name: "Testimonials", page: "TestimonialsPage"},
    { name: "Blog", page: "BlogListPage" },
    { name: "Contact", page: "ContactPage" },
  ];

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ease-in-out ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={() => handleNavClick("HomePage")} className="text-3xl font-extrabold group transition-colors">
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">{DUMMY_USER_DATA.name.split(' ')[0]}</span>
          <span className="text-slate-400 group-hover:text-slate-300 transition-colors">{DUMMY_USER_DATA.name.split(' ')[1]}</span>
          <span className="text-pink-500 text-4xl group-hover:text-pink-400 transition-colors">.</span>
        </button>
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button 
              key={item.name} 
              onClick={() => handleNavClick(item.page)} 
              variant={currentPage === item.page ? "primary" : "ghost"} 
              className={`text-sm !font-medium !py-2 !px-4 ${currentPage === item.page ? '' : 'hover:text-purple-200'}`}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
            <span className="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {isOpen ? <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z" /> : <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden border-t border-slate-700/50 mt-2">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button key={item.name} onClick={() => handleNavClick(item.page)} className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${currentPage === item.page ? 'bg-purple-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-purple-300'}`}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
};