import React, {useRef, useState} from 'react';
import Icon from "../../Icon";
import styles from './CardDropdown.module.sass'
import cn from "classnames";
import {CSSTransition} from "react-transition-group";

const CardDropdown = ({text}) => {
    const [isOpen,setIsOpen] = useState(true)
    const bodyRef = useRef(null)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>{text}</div>
                <div onClick={()=>setIsOpen(!isOpen)}>
                    <Icon viewBox={10} size={10} name={'chevron'} className={cn(styles.chevron, {[styles.chevron_active]: isOpen})}/>
                </div>
            </div>
            { isOpen &&
                <div ref={bodyRef}>
                    1234
                </div>
            }

        </div>
    );
};

export default CardDropdown;