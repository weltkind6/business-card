import './Fio.css';
const Fio = ({name, lastName}) => {
    return (
        <div className="fio">
            <span>{name}</span>
            <span>{lastName}</span>
        </div>
    );
};

export default Fio;
