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

const apiUrl = 'https://bc.okonti.ru/api/bc/?format=json&search=454F4564';
const Main = () => {
    const [data, setData] = useState([])
    console.log('data', data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData().catch(error => console.log(error))
    }, [])

    return (
        <div className="App">
            <section>
                <div className="contentWrapper">
                    <div className="content">
                        <div className="logo">
                            <img className="logoImg" src={logoBig} alt="logo"/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contentWrapper">
                    <div className="contentWrapper">
                        {data.map(({
                                       file_foto,
                                       name,
                                       surname,
                                       postbig,
                                       postsmall,
                                       whats_app_phone,
                                       tg,
                                       mail,
                                       phone,

                                   }) => <div className="content" key={(Math.random() * 100)}>
                            {/*<MyForm*/}
                            {/*    name={name}*/}
                            {/*    surname={surname}*/}
                            {/*    postbig={postbig}*/}
                            {/*    postsmall={postsmall}*/}
                            {/*    whatsApp={whats_app_phone}*/}
                            {/*    tg={tg}*/}
                            {/*    phone={phone}*/}
                            {/*/>*/}
                            <div className="photo">
                                <img src={file_foto} alt="foto"/>
                            </div>
                            <div className="btn">
                                <img src={plus} alt="plus"/>
                                Добавить в контакты
                            </div>
                            <div className="fio">
                                <span>{name}</span>
                                <span>{surname}</span>
                            </div>
                            <div className="postBig">{postbig}</div>
                            <div className="postSmall">{postsmall}</div>

                            <div className="contacts">
                                <a className="phone" href={`tel:+${phone}`}>
                                    <img src={call} alt="call"/>
                                    +7
                                    (910)
                                    657-73-28
                                </a>
                                <a className="mail" href={`mailto:${mail}`}>
                                    <img src={sms} alt="sms"/>{mail}
                                </a>
                            </div>

                            <div className="social">
                                <a className="ws">
                                    <img src={whatsapp} alt="whatsapp"/>
                                    <WhatsAppLinkGenerator
                                        phoneNumber={whats_app_phone}
                                        message="Написать в WhatsApp"
                                    />
                                </a>
                                <a className="tg">
                                    <img src={telegram} alt="telegram"/>
                                    <TgLinkGenerator
                                        username={tg}
                                        message="Написать в Telegram"
                                    />
                                </a>
                            </div>

                            <div className="social">
                                <a className="vk" href="#"><img src={vk} alt="vk"/></a>
                            </div>

                            <div className="qrWrapper">
                                <a className="btnLink"><img src={plusB} alt="plus-b"/> Добавить в контакты</a>
                                <img className="qrImg" src={qr} alt="qr-code"/>
                            </div>
                        </div>)}
                        <Footer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
