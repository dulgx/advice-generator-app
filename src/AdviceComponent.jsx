import React from "react";
import { ReactDOM } from "react";
import './App.css'
import dividerDesktop from './assets/pattern-divider-desktop.svg';
import AdviceFetch from "./AdviceFetch";
import RotateButton from "./RotateButton";

const AdviceComponent = () => {
    
    return(
        <div className="section">
            <div id="QQQ">
                <AdviceFetch />
            </div>
            <img id="Divider" src={dividerDesktop} alt="divider" />
            <RotateButton />
        </div>
    )
};

export default AdviceComponent;