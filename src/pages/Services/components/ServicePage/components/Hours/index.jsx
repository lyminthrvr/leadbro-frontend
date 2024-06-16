import styles from './Hours.module.sass'
const Hours = ({ hours }) => {
    return (
        <div className="hours">
            <div>
                <strong>Planned:</strong>
                <span>{hours.planned.planned}h planned</span>
                <span>{hours.planned.actual}h actual</span>
            </div>
            <div>
                <strong>Extra:</strong>
                <span>{hours.extra.planned}h planned</span>
                <span>{hours.extra.actual}h actual</span>
                <span>{hours.extra.cost}₽</span>
            </div>
        </div>
    );
};

export default Hours;