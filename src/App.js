import './App.css';
import logoBig from './img/logo-big.png'
import photo from './img/foto.png'
import call from './img/icon/call.svg'
import plus from './img/icon/plus.svg'
import sms from './img/icon/sms.svg'
import whatsapp from './img/icon/whatsapp.svg'
import telegram from './img/icon/telegram.svg'
import vk from './img/icon/vk.svg'
import plusB from './img/icon/plus-b.svg'
import qr from './img/qr.jpg'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [state, setState] = useState([])
    console.log(state)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://bc.okonti.ru/api/bc/?format=json&search=454F4564')
                setState(response.data)
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchData().catch(error => console.log(error))
    },[])

    return (
        <div className="App">
            <body>

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
                            <div className="foto">
                                <img src={photo} alt="foto"/>
                            </div>
                            <div className="btn">
                                <img src={plus} alt="plus"/>
                                Добавить в контакты
                            </div>
                            <div className="fio">
                                Дмитрий Кукуйский
                            </div>
                            <div className="postBig">Директор по маркетингу</div>
                            <div className="postSmall">Отдел маркетинга и рекламы</div>

                            <div className="contacts">
                                <a className="phone" href="tel:+7 (910) 657-73-28">
                                    <img src={call} alt="call"/>
                                    +7
                                    (910)
                                    657-73-28 </a>
                                <a className="mail" href="mailto:marketing@mail.ru"><img
                                    src={sms} alt="sms"/> marketing@mail.ru </a>
                            </div>

                            <div className="social">
                                <a className="ws" href="tel:+7 (910) 657-73-28"><img src={whatsapp} alt="whatsapp"/>Написать
                                    в
                                    WhatsApp</a>
                                <a className="tg" href="mailto:marketing@mail.ru"><img src={telegram} alt="telegram"/>Написать
                                    в Telegram </a>
                            </div>

                            <div className="social">
                                <a className="vk" href="#"><img src={vk} alt="vk"/></a>
                            </div>

                            <div className="qrWrapper">
                                <a className="btnLink"><img src={plusB} alt="plus-b"/> Добавить в контакты</a>
                                <img className="qrImg" src={qr} alt="qr-code"/>
                            </div>

                            <div className="banner">
                                Рекламный баннер
                            </div>
                            <div className="banner">
                                Рекламный баннер
                            </div>
                            <div className="banner">
                                Рекламный баннер
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </body>
        </div>
    );
}

export default App;
