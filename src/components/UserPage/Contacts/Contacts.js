import call from "../../../img/icon/call.svg";
import sms from "../../../img/icon/sms.svg"
import {formatPhoneNumber} from "../../../helpers/helpers";
import './style.css';

const Contacts = ({ phone, email }) => {

    return (
        <div className="contacts">
            <a className="phone" href={`tel:+${phone}`}>
                <img src={call} alt="call"/>
                {formatPhoneNumber(phone)}
            </a>
            {/*<a className="mail" href={`mailto:'email test'}`}>*/}
            {/*    <img src={sms} alt="sms"/>*/}
            {/*</a>*/}
        </div>
    );
};

export default Contacts;
