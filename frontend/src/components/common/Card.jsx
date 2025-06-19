import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className = "", hoverEffect = true, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-slate-800/70 backdrop-blur-md rounded-xl shadow-xl overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${hoverEffect ? 'hover:shadow-purple-600/40 transition-all duration-300 transform hover:-translate-y-1.5' : ''} ${className}`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
  onClick: PropTypes.func
};