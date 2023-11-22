import {useNavigate} from "react-router-dom";
import MyButton from "../../ui/MyButton/MyButton";
import './style.css';

const NotFound = () => {
    const navigate = useNavigate()
    const navigateHandler = () => navigate("/");

    return (
        <div className="notFound">
            <h2>Email не найден</h2>
            <MyButton onClick={navigateHandler} width="100%">
                 Назад
            </MyButton>
        </div>
    );
};

export default NotFound;
