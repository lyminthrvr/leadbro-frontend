import React from 'react';
import styles from './Field.module.sass'
import cn from "classnames";
const Index = ({label,children,cls}) => {
    return (
        <div className={cn(styles.container, cls)}>
            <div className={styles.label}>{label}</div>
            <div>{children}</div>
        </div>
    );
};

export default Index;