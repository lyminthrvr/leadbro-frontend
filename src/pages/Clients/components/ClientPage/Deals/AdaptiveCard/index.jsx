import React from 'react';
import styles from "../../../ClientsTable/Cells/AdaptiveCard/Card.module.sass";
import Card from "../../../../../../shared/Card";
import Badge from "../../../../../../shared/Badge";
import Avatar from "../../../../../../shared/Avatar";

const AdaptiveCard = ({data}) => {
    return (
        <div className={styles.container}>
            {data.map((original) => {
                return <Card className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.name}>{original?.name}</div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.status}></div>
                        <div className={styles.avatar}><Avatar imageSrc={original?.manager?.image}/></div>
                    </div>

                </Card>
            })}
        </div>
    );
};

export default AdaptiveCard;