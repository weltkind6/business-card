import React, {useEffect, useState} from 'react';
import qr from "../../../img/qr.png";
import Footer from "../../Footer/Footer";
import axios from "axios";
import Logo from "./Logo/Logo";
import QrCode from "./QrCode/QrCode";
import SocialLinks from "./SocialLinks/SocialLinks";
import Contacts from "./Contacts/Contacts";
import {getApiUrl, getHash, vcardLink} from "../../../api/api";
import Button from "../../ui/Button/Button";
import Fio from "./Fio/Fio";
import Photo from "./Photo/Photo";
import Preloader from "../../ui/Preloader/Preloader";
import './style.css';

const UserPage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log('data', data)

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
            <Logo/>
            <div className="contentWrapper">
                <div>
                    <div className="content">
                        <div className="photoBlock">
                            {isLoading ? <Photo photo={data.PHOTO}/> : <Preloader />  }
                        </div>
                        <Button link={`${vcardLink}${getHash()}.vcf`}>
                            Добавить в контакты
                        </Button>
                        <Fio
                            name={data.NAME}
                            secondName={data.SECOND_NAME}
                            lastName={data.LAST_NAME}
                        />
                        <Contacts
                            phone={data.PHONE}
                            email={data.EMAIL}
                        />
                        <SocialLinks phone={data.PHONE}/>
                        <QrCode qrImg={qr} />
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
