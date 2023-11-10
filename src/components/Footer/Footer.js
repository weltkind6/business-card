import React from 'react';
import styles from './Footer.module.css';
import logoBig from "../../img/logo-big.png";

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <img className="logoImg" src={logoBig} alt="logo"/>
            <div />
            <a href="#">www.okonti.ru</a>
        </div>
    );
};

export default Footer;
