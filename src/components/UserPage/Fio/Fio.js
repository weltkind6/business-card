import './Fio.css';
const Fio = ({name, lastName, secondName}) => {
    return (
        <div className="fio">
            <span>{name}</span>
            <span>{secondName}</span>
            <span>{lastName}</span>
        </div>
    );
};

export default Fio;
