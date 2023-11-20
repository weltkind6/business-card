import './style.css';
import plus from "../../../img/icon/plus.svg";
import React from "react";

const Button = ({children}) => {
    return (
        <div className="btn">
            <img src={plus} alt="plus"/>
            {children}
        </div>
    );
};

export default Button;
