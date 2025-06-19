import React, { useState, useEffect } from 'react';

export const CursorLightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition duration-300 ease-out"
      style={{
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px,
          rgba(217, 70, 239, 0.15),
          rgba(139, 92, 246, 0.1),
          transparent 80%
        )`,
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(1px)',
      }}
    />
  );
};
