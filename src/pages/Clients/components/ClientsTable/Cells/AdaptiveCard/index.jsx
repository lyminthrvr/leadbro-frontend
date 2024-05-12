import React from 'react'
import styles from "./Card.module.sass";
import Badge from "../../../../../../shared/Badge";
import Avatar from "../../../../../../shared/Avatar";
import Card from "../../../../../../shared/Card";

const AdaptiveCard = ({data, statusType}) => {
    return (
        <div className={styles.container}>
            {data.map((original)=> {
                console.log(original,'1234')
                return <Card onLink={()=>`${original.id}` } className={styles.card} >
                    <div className={styles.header}>
                        <div className={styles.name}>{original.name}</div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.status}><Badge classname={styles.status_adaptiveStatus}
                                                              status={original.status} statusType={statusType}/></div>
                        <div className={styles.avatar}><Avatar imageSrc={original.manager.image}/></div>
                    </div>

                </Card>
            })}
        </div>
    );
};

export default AdaptiveCard;