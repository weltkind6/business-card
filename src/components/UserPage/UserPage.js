import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import logoBig from "../../img/logo-big.png";
import plus from "../../img/icon/plus.svg";
import call from "../../img/icon/call.svg";
import sms from "../../img/icon/sms.svg";
import whatsapp from "../../img/icon/whatsapp.svg";
import WhatsAppLinkGenerator from "../../WhatsAppLinkGenerator/WhatsAppLinkGenerator";
import telegram from "../../img/icon/telegram.svg";
import TgLinkGenerator from "../../TgLinkGenerator/TgLinkGenerator";
import vk from "../../img/icon/vk.svg";
import plusB from "../../img/icon/plus-b.svg";
import qr from "../../img/qr.png";
import Footer from "../Footer/Footer";
import axios from "axios";

const UserPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(getApiUrl())
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData().catch(error => console.log(error))
    }, [])

    const getApiUrl = () => {
        const userValue = window.location.pathname.substring(6);
        return `https://bc.okonti.ru/api/contact/${userValue}/`;
    }

    return (
        <div>
            <Routes>
                <Route exact path="/show" element={<UserPage />} />
            </Routes>
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
                        <div className="content">
                            <div className="photo">
                                <img src={data.PHOTO} alt="foto"/>
                            </div>
                            <div className="btn">
                                <img src={plus} alt="plus"/>
                                Добавить в контакты
                            </div>
                            <div className="fio">
                                <span>{data.NAME}</span>
                                <span>{data.LAST_NAME}</span>
                            </div>
                            {/*<div className="postBig">postbig</div>*/}
                            {/*<div className="postSmall">postsmall</div>*/}

                            <div className="contacts">
                                <a className="phone" href={`tel:+${123123123}`}>
                                    <img src={call} alt="call"/>
                                    +7
                                    (910)
                                    657-73-28
                                </a>
                                {/*<a className="mail" href={`mailto:'email test'}`}>*/}
                                {/*    <img src={sms} alt="sms"/>{'test'}*/}
                                {/*</a>*/}
                            </div>

                            <div className="social">
                                <a className="ws">
                                    <img src={whatsapp} alt="whatsapp"/>
                                    <WhatsAppLinkGenerator
                                        phoneNumber={'88005553535'}
                                        message="Написать в WhatsApp"
                                    />
                                </a>
                                <a className="tg">
                                    <img src={telegram} alt="telegram"/>
                                    <TgLinkGenerator
                                        username={'88005553535'}
                                        message="Написать в Telegram"
                                    />
                                </a>
                            </div>

                            <div className="social">
                                <a className="vk" href="#"><img src={vk} alt="vk"/></a>
                            </div>

                            <div className="qrWrapper">
                                <a className="btnLink"><img src={plusB} alt="plus-b"/> Добавить в контакты</a>
                                <img
                                    className="qrImg"
                                    src={qr}
                                    alt="qr-code"
                                />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserPage;
