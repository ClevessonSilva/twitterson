import React, { useState } from 'react';

const MeuBotao = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const estilo = {
    backgroundColor: hover ? 'red' : 'blue',
    color: 'black',
    padding: '16px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button
      style={estilo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Button
    </button>
  );
};

export default MeuBotao;
