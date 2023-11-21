import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h2>Email не найден</h2>
            <button onClick={() => navigate("/")}>
                Вернуться
            </button>
        </div>
    );
};

export default NotFound;
