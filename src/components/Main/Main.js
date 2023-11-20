import React, {useEffect, useState} from 'react';
import WhatsAppLinkGenerator from "../../WhatsAppLinkGenerator/WhatsAppLinkGenerator";
import TgLinkGenerator from "../../TgLinkGenerator/TgLinkGenerator";
import axios from "axios";
import logoBig from "../../img/logo-big.png";
import plus from "../../img/icon/plus.svg";
import call from "../../img/icon/call.svg";
import sms from "../../img/icon/sms.svg";
import whatsapp from "../../img/icon/whatsapp.svg";
import telegram from "../../img/icon/telegram.svg";
import vk from "../../img/icon/vk.svg";
import plusB from "../../img/icon/plus-b.svg";
import qr from "../../img/qr.jpg";
import './style.css';
import Footer from "../Footer/Footer";
import UserPage from "../UserPage/UserPage";
import {Route, Routes} from "react-router-dom";

const Main = () => {

    return (
        <div>
            <UserPage />
        </div>
    );
};

export default Main;
