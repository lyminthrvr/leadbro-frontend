import React from 'react';
import styles from './Cards.module.sass'
import Card from "../../Card";
import Badge from "../../Badge";
import Avatar from "../../Avatar";
const AdaptiveCards = ({rows,statusType}) => {
    console.log('rows',rows)

    return (
        <div className={styles.container}>
            {rows.map(({original})=>{
                console.log(original,'values')
                return <Card className={styles.card}>
                <div className={styles.header}>
                    <div className={styles.name}>{original.name}</div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.status}><Badge classname={styles.status_adaptiveStatus} status={original.status} statusType={statusType} /></div>
                    <div className={styles.avatar}><Avatar imageSrc={original.manager.image}/></div>
                </div>

            </Card>})}
        </div>
    );
};

export default AdaptiveCards;