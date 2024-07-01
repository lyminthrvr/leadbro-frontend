import React, { forwardRef, useState, useEffect, useRef } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import TextInput from "../TextInput";
import styles from './datepicker.module.sass'
import Icon from "../Icon";
import { parse, isValid, format } from 'date-fns';
import {formatDateWithOnlyDigits} from "../../utils/formate.date";

registerLocale('ru', ru)

const Calendar = ({ value, onChange, label }) => {
    const datePickerRef = useRef();

    const CustomInput = forwardRef(({ onClick }, ref) => {
        const [inputValue, setInputValue] = useState(value ? formatDateWithOnlyDigits(value) : '');

        useEffect(() => {
            if (value) {
                setInputValue(formatDateWithOnlyDigits(value));
            }
        }, [value]);

        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

        const handleBlur = () => {
            const parsedDate = parse(inputValue, 'dd.MM.yyyy', new Date());
            if (isValid(parsedDate)) {
                onChange(parsedDate);
            } else {
                setInputValue(value ? formatDateWithOnlyDigits(value) : '');
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleBlur();
                e.target.blur();
                datePickerRef.current.setOpen(false);
            }
        };

        return (
            <TextInput
                icon={'calendar'}
                classWrap={styles.datepicker_wrapper}
                classInput={styles.datepicker_input}
                classLabel={styles.datepicker_label}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                edited={true}
                label={label}
                onClick={onClick}
                ref={ref}
            />
        );
    });

    const handleDateChange = (date) => {
        onChange(date);
    };

    return (
        <div>
            <DatePicker
                ref={datePickerRef}
                selected={value}
                dateFormat="dd.MM.yyyy"
                onChange={handleDateChange}
                customInput={<CustomInput />}
                locale={'ru'}
            />
        </div>
    );
};

export default Calendar;