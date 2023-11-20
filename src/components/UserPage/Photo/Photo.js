import './style.css';

const Photo = ({photo}) => {
    return (
        <div className="photo">
            <img src={photo} alt="foto"/>
        </div>
    );
};

export default Photo;
