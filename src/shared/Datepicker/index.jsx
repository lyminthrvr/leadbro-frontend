import React, {forwardRef} from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import TextInput from "../TextInput";
import styles from './datepicker.module.sass'
import Icon from "../Icon";
registerLocale('ru', ru)

const Calendar = ({value,onChange,label}) => {
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <TextInput icon={'calendar'} classWrap={styles.datepicker_wrapper} classInput={styles.datepicker_input} classLabel={styles.datepicker_label} value={value} edited={true} label={label} onClick={onClick} ref={ref}/>
    ));
    return (
        <div>
        <DatePicker
            selected={value}
            dateFormat="dd.MM.yyyy"
            onChange={(date) => onChange(date)}
            customInput={<CustomInput/>}
            locale={'ru'}
            // monthNames={['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']}
            // dayNamesMin={['Вс','Пн','Вт','Ср','Чт','Пт','Сб']}
        />
        </div>
    );
};

export default Calendar;