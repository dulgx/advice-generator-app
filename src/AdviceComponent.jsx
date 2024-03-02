import React from "react";
import dice from './assets/icon-dice.svg';
import dividerDesktop from './assets/pattern-divider-desktop.svg';
import dividerMobile from './assets/pattern-divider-mobile.svg'
import AdviceFetch from "./AdviceFetch";

const Advice = () => {
    return(
        <div className="section">
            <h3 id="Advice">Advice</h3>
            <div id="QQQ">
                <AdviceFetch />
            </div>
            <img id="Divider" src={dividerDesktop} alt="divider" />
            <div id="DiceBack"><img src={dice} alt="dice" id="Dice"/></div>
            
        </div>
    )
};

export default Advice;