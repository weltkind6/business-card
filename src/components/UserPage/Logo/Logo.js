import logoBig from "../../../img/logo-big.png";
import './styles.css';

const Logo = () => {
    return (
        <div className="contentWrapper">
            <div className="content">
                <div className="logo">
                    <img className="logoImg" src={logoBig} alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default Logo;
