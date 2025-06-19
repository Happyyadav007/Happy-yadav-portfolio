import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ id, children, className = "py-16 md:py-20", bgClassName = "", hasPattern = false }) => (
  <section id={id} className={`relative ${bgClassName} ${hasPattern ? 'overflow-hidden' : ''}`}>
    {hasPattern && (
      <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </>
    )}
    <div className={`container mx-auto px-6 ${className}`}>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgClassName: PropTypes.string,
  hasPattern: PropTypes.bool
};