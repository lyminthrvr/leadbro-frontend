import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/app.sass'
import styles from './button.module.sass'
import cn from "classnames";


const Button = ({name, after, before, onClick, adaptiveIcon}) => {
    return (
        <>
            <div className={styles.control} onClick={onClick}>
                {before}
                <Link className={cn("button", styles.button)} to="/products/add">
                    <span>{name}</span>
                </Link>
                {after}
            </div>
            <div className={styles.adaptive}>{adaptiveIcon}</div>
        </>
)
    ;
};

export default Button;