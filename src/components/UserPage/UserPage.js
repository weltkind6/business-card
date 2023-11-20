import React, {useEffect, useState} from 'react';
import qr from "../../img/qr.png";
import Footer from "../Footer/Footer";
import axios from "axios";
import Logo from "./Logo/Logo";
import QrCode from "./QrCode/QrCode";
import SocialLinks from "./SocialLinks/SocialLinks";
import Contacts from "./Contacts/Contacts";
import {getApiUrl} from "../../api/api";
import Button from "../ui/Button/Button";
import Fio from "./Fio/Fio";
import Photo from "./Photo/Photo";
import AppRoutes from "../../AppRoutes/AppRoutes";
import Preloader from "../ui/Preloader/Preloader";
import './style.css';

const UserPage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(getApiUrl())
                setData(response.data)
                setIsLoading(true)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData().catch(error => console.log(error))
    }, [])

    return (
        <div>
            <AppRoutes/>
            <Logo/>
            <div className="contentWrapper">
                <div>
                    <div className="content">
                        <div className="photoBlock">
                            {isLoading ? <Photo photo={data.PHOTO}/> : <Preloader />  }
                        </div>
                        <Button>Добавить в контакты</Button>
                        <Fio name={data.NAME} lastName={data.LAST_NAME}/>
                        <Contacts/>
                        <SocialLinks/>
                        <QrCode qrImg={qr}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default UserPage;