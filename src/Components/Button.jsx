import React from "react";
const Button = ({text, onClick, type = "button" , className= ""}) => {
    return(
        <button type={type} className={`w-fit h-[50px] bg-[linear-gradient(90deg,_#00bcd4,_#0a0f5c)] bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position] duration-500 ease-in-out font-poppins font-medium text-white px-5 rounded-lg inline-flex items-center justify-center cursor-pointer border-none ${className}`} onClick={onClick}>
            <span className="button-text">{text}</span>
        </button>
    );
};

export default Button;