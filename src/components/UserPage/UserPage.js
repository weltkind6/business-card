import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import qr from "../../img/qr.png";
import Footer from "../Footer/Footer";
import axios from "axios";
import Logo from "./Logo/Logo";
import QrCode from "./QrCode/QrCode";
import SocialLinks from "./SocialLinks/SocialLinks";
import Contacts from "./Contacts/Contacts";
import {getApiUrl} from "../../api/api";
import './style.css';
import Button from "../ui/Button/Button";

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
                <div className="contentWrapper">
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="photo">
                                <img src={data.PHOTO} alt="foto"/>
                            </div>
                            <Button>Добавить в контакты</Button>
                            <div className="fio">
                                <span>{data.NAME}</span>
                                <span>{data.LAST_NAME}</span>
                            </div>
                            {/*<div className="postBig">postbig</div>*/}
                            {/*<div className="postSmall">postsmall</div>*/}
                            <Contacts />
                            <SocialLinks />
                            <QrCode qrImg={qr}/>
                        </div>
                        <Footer />
                    </div>
                </div>
        </div>
    );
};

export default UserPage;
