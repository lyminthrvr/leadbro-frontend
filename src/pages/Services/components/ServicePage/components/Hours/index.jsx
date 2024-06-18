import styles from './Hours.module.sass'
import CardField from "../CardField";
import Icon from "../../../../../../shared/Icon";
import Button from "../../../../../../shared/Button ";
import Basis from "../../../../../../shared/Basis";
import cn from "classnames";
const Hours = ({ hours }) => {
    return (
        <div className="hours">
            {/*<div>*/}
            {/*    <strong>Planned:</strong>*/}
            {/*    <span>{hours.planned.planned}h planned</span>*/}
            {/*    <span>{hours.planned.actual}h actual</span>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <strong>Extra:</strong>*/}
            {/*    <span>{hours.extra.planned}h planned</span>*/}
            {/*    <span>{hours.extra.actual}h actual</span>*/}
            {/*    <span>{hours.extra.cost}₽</span>*/}
            {/*</div>*/}
            <CardField labelCls={styles.labelPlanned} label={'Время по ТЗ'}>
                    <HoursView basis={282}  hours={hours.planned.planned} label={'плановое время'}></HoursView>
                    <HoursView basis={1230} hours={hours.planned.actual} label={'фактическое время'}></HoursView>
            </CardField>
            <CardField labelCls={styles.labelExtra} cls={cn(styles.hoursView_container)} label={'Время сверх ТЗ'}>
                    <HoursView basis={282} hours={hours.extra.planned} label={'плановое время'}></HoursView>
                    <HoursView basis={400} hours={hours.extra.actual} label={'фактическое время'}></HoursView>
                    <Basis basis={740} className={styles.costs}>
                    <CostView cost={hours.extra.cost}></CostView>
                    <Button classname={styles.button} type={'secondary'} name={'Добавить счет'}/>
                    </Basis>
            </CardField>
        </div>
    );
};

const CostView = ({cost}) => {
    return <div className={styles.hoursView}>
        <Icon size={20} name={'clock'}/>
        <p className={styles.hoursView_text}><span>{Number(cost).toFixed(2)} ₽</span></p>
    </div>

}

const HoursView = ({hours, label, basis}) => {
    return (
        <Basis basis={basis} className={styles.hoursView}>
            <Icon size={20} name={'clock'}/>
            <p className={styles.hoursView_text}><span>{hours} ч </span>{label}</p>
        </Basis>
    )
}

export default Hours;