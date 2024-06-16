import styles from './Bills.module.sass'
import {formatDateWithoutHours} from "../../../../../../utils/formate.date";
const Bills = ({ bills }) => {
    return (
        <div className="bills">
            {bills.map(bill => (
                <div key={bill.id}>
                    <span>{bill.title}</span>
                    <button>{bill.withoutSign.file}</button>
                    <button>{bill.withSign.file}</button>
                    <span>{bill.sum}₽</span>
                    <span>{bill.status}</span>
                    <span>{formatDateWithoutHours(bill.payedDate)}</span>
                </div>
            ))}
        </div>
    );
};

export default Bills;