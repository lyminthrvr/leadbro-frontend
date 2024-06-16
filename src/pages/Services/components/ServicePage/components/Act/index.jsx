import styles from './Act.module.sass'
const Act = ({ act }) => {
    return (
        <div className="act">
            <button>{act.withoutSign.file}</button>
            <button>{act.withSign.file}</button>
            <span>{act.scanStatus}</span>
            <span>{act.originalStatus}</span>
        </div>
    );
};

export default Act;