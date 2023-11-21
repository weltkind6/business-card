import plusB from "../../../../img/icon/plus-b.svg";
import QRCode from 'qrcode.react';
import {getHash} from "../../../../api/api";
import './style.css';

const QrCode = () => {
    const qrLink = `https://bc.okonti.ru/show/${getHash()}`;
    const qrSize = 150;

    return (
        <div className="qrWrapper">
            <a className="btnLink" href={`https://bc.okonti.ru/vcard/${getHash()}`}>
                <img src={plusB} alt="plus-b"/>
                Добавить в контакты
            </a>
            <div className="qrContainer">
                <QRCode value={qrLink} size={qrSize}/>
            </div>
        </div>
    );
};

export default QrCode;
