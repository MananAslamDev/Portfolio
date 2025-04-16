import React from "react";
import './Button.css'
const Button = ({text, onClick, type = "button" , className= ""}) => {
    return(
        <button type={type} className={`custom-btn ${className}`} onClick={onClick}>
            <span className="button-text">{text}</span>
        </button>
    );
};

export default Button;