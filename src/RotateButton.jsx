import React, { useState } from 'react';
import dice from './assets/icon-dice.svg';
import dividerMobile from './assets/pattern-divider-mobile.svg'
import './App.css'

const RotateButton = () => {
    const [isRotated, setRotated] = useState(false);
  
    const handleButtonClick = () => {
      setRotated(!isRotated);
    };

  
    return (
      <button 
        className={`rotate-button ${isRotated ? 'rotate' : ''}`}
        onClick={handleButtonClick}
        id="DiceBack"
      >
        <img 
          src={dice} 
          alt="dice" 
          id="Dice"
        />
      </button>
    );
  };

export default RotateButton;
