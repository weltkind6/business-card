import noAvatar from '../../../../img/no-avatar.png'
import './style.css';

const Photo = ({photo}) => {
    return (
        <div className="photo">
            <img
                src={photo ? photo : noAvatar} alt="foto"
            />
        </div>
    );
};

export default Photo;
