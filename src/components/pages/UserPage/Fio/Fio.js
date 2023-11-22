import './Fio.css';
const Fio = ({name, lastName, secondName, post}) => {
    return (
        <div className="fio">
            <span>{name}</span>
            <span>{secondName}</span>
            <span>{lastName}</span>
            <div>{post}</div>
        </div>
    );
};

export default Fio;
