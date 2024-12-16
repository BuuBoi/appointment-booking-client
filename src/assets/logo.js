import React from 'react';

const Logo = ({ width = 32, height = 32, className }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="48" fill="#4F46E5"/>
    <path 
      d="M50 70 C 40 60, 20 45, 20 30 C 20 20, 30 15, 40 20 C 45 22, 48 28, 50 32 C 52 28, 55 22, 60 20 C 70 15, 80 20, 80 30 C 80 45, 60 60, 50 70" 
      fill="white"
    />
    <rect x="46" y="35" width="8" height="20" fill="#4F46E5"/>
    <rect x="40" y="41" width="20" height="8" fill="#4F46E5"/>
  </svg>
);

export default Logo;