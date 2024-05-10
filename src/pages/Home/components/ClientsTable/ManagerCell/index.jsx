import React from 'react';
import styles from './ManagerCell.module.sass'
import Avatar from "../../../../../shared/Avatar";

const ManagerCell = ({manager}) => {
    const imageSrc = manager.image
    return (
        <div className={styles.container}>
            <Avatar imageSrc={imageSrc}/>
            <div className={styles.fioContainer}>
                <div>{manager.name} {manager.surname}</div>
                <div>{manager.role}</div>
            </div>
        </div>
    );
};

export default ManagerCell;