import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DUMMY_USER_DATA from '../../constants/data';

export const PageWrapper = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title} | ${DUMMY_USER_DATA.name} - MERN Developer`;
    window.scrollTo(0, 0); 
  }, [title]);
  
  return (
    <main className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-slate-200 min-h-screen selection:bg-purple-500 selection:text-white">
      {children}
    </main>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};