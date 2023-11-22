import './style.css';

const MyButton = ({children, onClick, width}) => {

    return (
        <button className="myBtn" onClick={onClick} style={{width: width}}>
            {children}
        </button>
    );
};

export default MyButton;
