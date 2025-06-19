import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', href, target, rel, icon: IconComponent }) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold py-3 px-7 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform focus:outline-none focus:ring-4 active:scale-95";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white focus:ring-purple-500/50",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100 focus:ring-slate-500/50",
    outline: "bg-transparent hover:bg-purple-500/10 text-purple-400 border-2 border-purple-500 hover:text-purple-300 focus:ring-purple-500/50",
    ghost: "bg-transparent hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 focus:ring-purple-500/50 !shadow-none"
  };
  const style = `${baseStyle} ${variants[variant]} ${className}`;

  const content = (
    <>
      {IconComponent && <IconComponent className="w-5 h-5 mr-2.5" />}
      {children}
    </>
  );

  if (href) {
    return <a href={href} target={target} rel={rel} className={style}>{content}</a>;
  }
  return <button type={type} onClick={onClick} className={style}>{content}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  className: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  icon: PropTypes.elementType
};