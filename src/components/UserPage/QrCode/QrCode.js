import plusB from "../../../img/icon/plus-b.svg";
import './style.css';

const QrCode = ({ qrImg }) => {
    return (
        <div className="qrWrapper">
            <a className="btnLink">
                <img src={plusB} alt="plus-b"/> Добавить в контакты</a>
            <img
                className="qrImg"
                src={qrImg}
                alt="qr-code"
            />
        </div>
    );
};

export default QrCode;
