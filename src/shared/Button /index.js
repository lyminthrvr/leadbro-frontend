import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/app.sass';
import styles from './button.module.sass';
import cn from "classnames";
import { motion } from 'framer-motion';
import { hoverTransition } from "../../utils/motion.variants";

const Button = ({ name, after, before, onClick, adaptiveIcon, classname, type = 'primary', ...rest }) => {
    return (
        <>
            {!rest.isSmallButton &&
                <div className={cn(styles.control, classname,{
                    [styles.primary]: type === 'primary',
                    [styles.secondary]: type === 'secondary'
                }, { [styles.isNotSmallTable]: !rest.isSmallButton })}>
                    {before}
                    <Link className={cn(styles.button, 'button')} to={rest.to}>
                        <span>{name}</span>
                    </Link>
                    {after}
                </div>
            }
            {!rest.isSmallButton && adaptiveIcon && <div className={styles.adaptive}>{adaptiveIcon}</div>}
            {rest.isSmallButton &&
                <div onClick={onClick} className={cn(styles.smallButton, {
                    [styles.primary]: type === 'primary',
                    [styles.secondary]: type === 'secondary'
                })}>
                    {adaptiveIcon}
                </div>
            }
        </>
    );
};

export default Button;
