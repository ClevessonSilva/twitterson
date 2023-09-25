import React, { useState } from 'react';
import { styled } from '@mui/system';

const TelaDeContato = styled('div')(({ hover }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '16px',
  gap: '16px',
  width: hover ? '300px' : '200px',
  height: hover ? '320px' : '200px',
  background: 'rgba(31, 28, 76, 0.8)',
  border: '1px solid rgba(14, 116, 144, 0.8)',
  borderRadius: '8px',
  position: 'relative',
  transition: 'width 0.3s, height 0.3s',
  overflow: 'hidden',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const FotoMonitor = styled('div')(({ hover }) => ({
  width: hover ? '234px' : '100%',
  height: hover ? '176px' : '100%',
  background: 'rgba(14, 116, 144, 0.8)',
  borderRadius: '8px',
  transition: 'width 0.3s, height 0.3s',
}));

const NomeMonitor = styled('div')({
  width: '100%',
  height: '42px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFFFFF',
});

const InfoContato = styled('div')({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#FFFFFF',
});

const TelaDeContatoComponent = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <TelaDeContato
      hover={hover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FotoMonitor hover={hover} />
      <NomeMonitor>Nome</NomeMonitor>
      {hover && (
        <>
          <InfoContato>E-mail</InfoContato>
          <InfoContato>Telefone</InfoContato>
        </>
      )}
    </TelaDeContato>
  );
};

export default TelaDeContatoComponent;
