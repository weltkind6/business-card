import call from "../../../img/icon/call.svg";
import './style.css';

const Contacts = ({ phone, email }) => {
    return (
        <div className="contacts">
            <a className="phone" href={`tel:+${123123123}`}>
                <img src={call} alt="call"/>
                +7
                (910)
                657-73-28
            </a>
            {/*<a className="mail" href={`mailto:'email test'}`}>*/}
            {/*    <img src={sms} alt="sms"/>{'test'}*/}
            {/*</a>*/}
        </div>
    );
};

export default Contacts;
