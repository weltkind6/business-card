import call from "../../../../img/icon/call.svg";
import sms from "../../../../img/icon/sms.svg"
import {formatPhoneNumber} from "../../../../helpers/helpers";
import './style.css';

const Contacts = ({ phone, email }) => {

    return (
        <div className="contacts">
            {
                phone && (
                    <a className="phone" href={`tel:+${phone}`}>
                        <img src={call} alt="call"/>
                        {formatPhoneNumber(phone)}
                    </a>
                )
            }
            {
                email && (
                    <a className="mail" href={`mailto: ${email}`}>
                        <img src={sms} alt="sms"/>
                        {email}
                    </a>
                )
            }
        </div>
    );
};

export default Contacts;
