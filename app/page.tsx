import React, { useState } from 'react';

const Button = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const baseColor = '#3498db';
  const hoverColor = '#2980b9';

  const estilo = {
    backgroundColor: hover ? hoverColor : baseColor,
    color: 'white',
    padding: '20px 40px',
    fontSize: '24px',
    border: 'none',
    borderRadius: '10px',
    boxShadow: `0px 0px 10px rgba(0, 0, 0, ${hover ? '0.3' : '0'})`,
    cursor: 'pointer'
  };

  return (
    <button
      style={estilo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Gourmet Button
    </button>
  );
};

export default Button;
