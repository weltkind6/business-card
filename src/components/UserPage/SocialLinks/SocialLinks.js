import React from 'react';
import whatsapp from '../../../img/icon/whatsapp.svg';
import telegram from '../../../img/icon/telegram.svg';
import WhatsAppLinkGenerator from "../../../WhatsAppLinkGenerator/WhatsAppLinkGenerator";
import TgLinkGenerator from "../../../TgLinkGenerator/TgLinkGenerator";
import vk from "../../../img/icon/vk.svg";
import './style.css';

const SocialLinks = ({ phoneNumber }) => {
    return (
        <div className="social">
            <a className="ws">
                <img src={whatsapp} alt="whatsapp" />
                <WhatsAppLinkGenerator phoneNumber={phoneNumber} message="Написать в WhatsApp" />
            </a>
            <a className="tg">
                <img src={telegram} alt="telegram" />
                <TgLinkGenerator username={phoneNumber} message="Написать в Telegram" />
            </a>
            <div>
                <a className="vk" href="#">
                    <img src={vk} alt="vk"/>
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;