import React from 'react';
import whatsapp from '../../../../img/icon/whatsapp.svg';
import telegram from '../../../../img/icon/telegram.svg';
import WhatsAppLinkGenerator from "../../../../helpers/WhatsAppLinkGenerator/WhatsAppLinkGenerator";
import TgLinkGenerator from "../../../../helpers/TgLinkGenerator/TgLinkGenerator";
import vk from "../../../../img/icon/vk.svg";
import './style.css';

const SocialLinks = ({phone}) => {
    return (
        <div className="social">
            <a className="ws">
                <img src={whatsapp} alt="whatsapp" />
                <WhatsAppLinkGenerator phoneNumber={phone} message="Написать в WhatsApp" />
            </a>
            <a className="tg">
                <img src={telegram} alt="telegram" />
                <TgLinkGenerator username={phone} message="Написать в Telegram" />
            </a>
            {/*<div>*/}
            {/*    <a className="vk" href="#">*/}
            {/*        <img src={vk} alt="vk"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
};

export default SocialLinks;