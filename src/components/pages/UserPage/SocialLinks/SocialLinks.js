import React from 'react';
import whatsapp from '../../../../img/icon/whatsapp.svg';
import telegramIcon from '../../../../img/icon/telegram.svg';
import WhatsAppLinkGenerator from "../../../../helpers/WhatsAppLinkGenerator/WhatsAppLinkGenerator";
import TgLinkGenerator from "../../../../helpers/TgLinkGenerator/TgLinkGenerator";
import './style.css';

const SocialLinks = ({phone, telegram}) => {
    return (
        <div className="social">
            <div className="ws">
                <img src={whatsapp} alt="whatsapp" />
                <WhatsAppLinkGenerator phoneNumber={phone} message="Написать в WhatsApp" />
            </div>
            <div className="tg">
                <img src={telegramIcon} alt="telegram" />
                <TgLinkGenerator username={telegram} message="Написать в Telegram" />
            </div>
            {/*<div>*/}
            {/*    <a className="vk" href="#">*/}
            {/*        <img src={vk} alt="vk"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
};

export default SocialLinks;
