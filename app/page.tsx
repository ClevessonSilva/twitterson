"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import './app.css';



function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleEntrarClick = () => {
    setShowPopup(true);
  };

  const handleAcessar = () => {
   
    setShowPopup(false);
  };

  const handleCancelEntrar = () => {
   
    setShowPopup(false);
  };

  return (
    <div className="app" style={{ backgroundColor: '#13244E' }}>
      <h1 className="title">Twitterson</h1>
      <p className="subtitle">O Twitter só que melhor</p>

      <button className="entrar-button" onClick={handleEntrarClick}>
        Entrar
      </button>

      <Modal
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        className="popup-modal"
        overlayClassName="popup-overlay"
      >
        <p className="popup-message">Esse é nosso site!</p>
        <div className="button-container">
          <button className="access-button" onClick={handleAcessar}>
            Acessar
          </button>
          <button className="cancel-button" onClick={handleCancelEntrar}>
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;