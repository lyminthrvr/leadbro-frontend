import React from 'react';
import styles from './Activity.module.sass'
const Index = ({title,time}) => {
    return (
        <div className={styles.container}>
            <div>{title}</div>
            <div>{time}</div>
        </div>
    );
};

export default Index;