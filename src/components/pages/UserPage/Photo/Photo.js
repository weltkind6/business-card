import noAvatar from '../../../../img/no-avatar.png'
import './style.css';

const Photo = ({photo}) => {
    return (
        <div className="photo">
            <img
                src={photo === null ? noAvatar : photo} alt="foto"
            />
        </div>
    );
};

export default Photo;
