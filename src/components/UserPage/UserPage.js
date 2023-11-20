import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import plus from "../../img/icon/plus.svg";
import vk from "../../img/icon/vk.svg";
import qr from "../../img/qr.png";
import Footer from "../Footer/Footer";
import axios from "axios";
import Logo from "./Logo/Logo";
import QrCode from "./QrCode/QrCode";
import SocialLinks from "./SocialLinks/SocialLinks";
import Contacts from "./Contacts/Contacts";
import {getApiUrl} from "../../api/api";
import './style.css';

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

    return (
        <div>
            <Routes>
                <Route exact path="/show" element={<UserPage />} />
            </Routes>

           <Logo />

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
                            <Contacts />

                            <SocialLinks />

                            <div className="social">
                                <a className="vk" href="#">
                                    <img src={vk} alt="vk"/>
                                </a>
                            </div>

                            <QrCode qrImg={qr}/>
                        </div>
                        <Footer />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserPage;
