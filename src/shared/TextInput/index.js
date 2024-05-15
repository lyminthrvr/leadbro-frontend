import React, {useRef} from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import TextArea from "../TextArea";
import {toast} from "react-toastify";
import {enqueueSnackbar} from "notistack";
import {handleSubmit} from "../../utils/snackbar";

const TextInput = ({
                       className,
                       classLabel,
                       classInput,
                       label,
                       classWrap,
                       classNameActions,
                       icon,
                       copy,
                       currency,
                       tooltip,
                       place,
                       actions,
                       ...props
                   }) => {
    const inputRef = useRef(null)
    return (
        <div
            className={cn(
                styles.field,
                {[styles.fieldIcon]: icon},
                {[styles.fieldCopy]: copy},
                {[styles.fieldCurrency]: currency},
                className
            )}
        >
            {label && (
                <div className={cn(classLabel, styles.label)}>
                    {label}{" "}
                    {tooltip && (
                        <Tooltip
                            className={styles.tooltip}
                            title={tooltip}
                            icon="info"
                            place={place ? place : "right"}
                        />
                    )}
                </div>
            )}
            <div onMouseLeave={() => {
                if (!props?.edited && props?.onHover)
                     props?.onHover()
            }
            } onMouseEnter={() => {
                if ((props?.edited && props?.hovered )|| !props?.onHover)
                    return
                 props?.onHover()
            }
            } className={cn(styles.wrap, classWrap,{[styles.wrap_hovered]:props?.hovered})}>
                {props.type === 'textarea' ?
                    <TextArea ref={inputRef} className={cn(classInput, styles.input, styles.textarea)} {...props} /> :
                    <input ref={inputRef} disabled={!props?.edited ?? false} className={cn(classInput, styles.input)} {...props} />}
                {icon && (
                    <div className={styles.icon}>
                        <Icon name={icon} size="24"/>{" "}
                    </div>
                )}
                {copy && (
                    <button className={styles.copy}>
                        <Icon name="copy" size="24"/>{" "}
                    </button>
                )}
                {currency && <div className={styles.currency}>{currency}</div>}
                {props?.hovered && <div className={cn(styles.actions, classNameActions)}>
                    {actions.edit && !props?.edited && <div onClick={() => {
                        props?.onEdit()
                        props?.onHover()
                    }} className={cn(styles.edit, {[styles.edit_active]: props.edited})}>
                        <Icon name={'edit'} size="24"/>{" "}
                    </div>
                    }
                    {actions.edit && props?.edited && <div className={styles.submit} onClick={() => {
                        actions.submit()
                        props?.onEdit()
                        props?.onHover()
                    }}><Icon fill={'#FF6A55'} size={24} name={'check-circle'}/></div>}
                    {actions.edit && props.edited &&
                        <div className={styles.close} onClick={()=>{
                            actions.reset()
                            props.onEdit()
                            props?.onHover()
                        }}><Icon size={24} name={'close'}/></div>}
                    {actions.delete && <div onClick={(e)=>{
                        actions.delete(inputRef.current)
                        props?.onEdit()
                        props?.onHover()
                    }} className={styles.trash}>
                        <Icon name={'trash'} size="24"/>{" "}
                    </div>}
                    {actions.copy &&
                        <div onClick={()=>{
                            // console.log(inputRef.current,'curr')
                            actions.copy(inputRef.current.value)
                        }} className={styles.copy_actions}>
                            <Icon name={'copy'} size="24"/>{" "}
                        </div>}
                </div>}
            </div>
        </div>
    );
};

export default TextInput;
