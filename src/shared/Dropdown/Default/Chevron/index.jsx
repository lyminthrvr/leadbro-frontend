import React from 'react';
import cn from 'classnames';
import styles from '../Dropdown.module.sass';

const Chevron = ({ isOpen }) => {
    return (
        <div
            className={cn(styles.chevron, {
                [styles.up]: isOpen,
            })}
        />
    );
};

export default Chevron;
