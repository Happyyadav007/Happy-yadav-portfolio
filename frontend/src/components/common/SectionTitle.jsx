import React from 'react';
import PropTypes from 'prop-types';

export const SectionTitle = ({ title, icon, subtitle }) => (
  <div className="text-center mb-12 md:mb-16 fade-in-section">
    <div className="inline-flex items-center justify-center text-purple-400 mb-4">
      {icon && React.cloneElement(icon, { className: "w-10 h-10 md:w-12 md:h-12 mr-3 text-purple-400 " })}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-[1.4]">{title}</h2>
    </div>
    {subtitle && <p className="text-lg md:text-xl text-slate-400 mt-3 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  subtitle: PropTypes.string
};