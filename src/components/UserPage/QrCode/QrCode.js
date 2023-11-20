import plusB from "../../../img/icon/plus-b.svg";
import QRCode from 'qrcode.react';
import {getHash} from "../../../api/api";
import './style.css';

const QrCode = () => {
    const qrLink = `https://bc.okonti.ru/show/${getHash()}`;
    console.log('qrValue', qrLink)
    const qrSize = 150;

    return (
        <div className="qrWrapper">
            <a className="btnLink">
                <img src={plusB} alt="plus-b"/> Добавить в контакты</a>
            <QRCode value={qrLink} size={qrSize} />
        </div>
    );
};

export default QrCode;
