import React from 'react';
import styles from './Activity.module.sass'
import {Link} from "react-router-dom";
const Index = ({title,time}) => {
    return (
        <div className={styles.container}>
            <Link>
                <div>{title}</div>
            </Link>
            <div>{time}</div>
        </div>
    );
};

export default Index;