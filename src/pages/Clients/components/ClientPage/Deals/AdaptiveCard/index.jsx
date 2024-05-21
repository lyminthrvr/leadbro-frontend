import React from 'react';
import styles from "./Card.module.sass";
import Card from "../../../../../../shared/Card";
import Badge from "../../../../../../shared/Badge";
import Avatar from "../../../../../../shared/Avatar";
import Button from "../../../../../../shared/Button ";

const AdaptiveCard = ({data, onPagination}) => {
    return (
        <div className={styles.container}>
            {data.map((original) => {
                console.log(original,'original')
                return <Card className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.name}>{original?.description}</div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.status}>
                            <span>Статус</span>
                            <span>{original?.status}</span>
                        </div>
                        <div className={styles.sum}>
                            <span>Сумма</span>
                            <span>{original?.sum}</span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.avatar}><Avatar imageSrc={original?.responsible?.image}/></div>
                    </div>
                    {onPagination && <Button isSmallButton={false} name={'Показать еще(10)'}/>}
                </Card>
            })}
        </div>
    );
};

export default AdaptiveCard;