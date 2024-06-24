import React, {useRef, useState, useEffect} from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import Tooltip from "../Tooltip";
import useOutsideClick from "../../hooks/useOutsideClick";
import Select,{components,ControlProps,
    Props,} from "react-select";
import Chevron from "../Dropdown/Default/Chevron";
import styles from "./Selector.module.sass";


const ValuesSelector = ({
                            className,
                            classNameContainer,
                            classDropdownHead,
                            classDropdownLabel,
                            value,
                            onChange,
    isMulti,
    name,
                            options,
                            label,
                            tooltip,
                            small,
                            upBody,
                            renderOption,
                            renderValue,
                        }) => {
    const ref = useRef(false)

    const handleChange = (selectedOptions) => {
        if (!isMulti && selectedOptions.length > 1) {
            // Оставляем только последний выбранный элемент
            onChange([selectedOptions[selectedOptions.length - 1]]);
        } else {
            onChange(selectedOptions);
        }
    };
    return(
    <div ref={ref} className={classNameContainer}>
        {label && (
            <div className={cn(styles.label, classDropdownLabel)}>
                {label}{" "}
                {tooltip && (
                    <Tooltip
                        className={styles.tooltip}
                        title={tooltip}
                        icon="info"
                        place="right"
                    />
                )}
            </div>
        )}
        <Select
            onChange={handleChange}
            value={value}
            isMulti={true}
            name={name}
            options={options}
            components={{
                IndicatorSeparator:null,
                CrossIcon:null,
                ClearIndicator:null,
                DropdownIndicator:(props)=><Indicator {...props}/>
            }}
            classNames={{
                valueContainer:(state)=>styles.selector__container__control_values,
                control:(state)=>state.isFocused ? styles.selector__container__control_focused :  styles.selector__container__control
            }}
        />
    </div>
    )
};

const Indicator = ({ children,...props }) => {
    return <components.DropdownIndicator {...props}>
        <Chevron isOpen={props.selectProps.menuIsOpen}></Chevron>
    </components.DropdownIndicator>
};


export default ValuesSelector;
