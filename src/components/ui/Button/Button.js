import './style.css';
import plus from "../../../img/icon/plus.svg";
import React from "react";

const Button = ({children, link}) => {
    return (
        <a className="btn" href={link}>
            <img src={plus} alt="plus"/>
            {children}
        </a>
    );
};

export default Button;
