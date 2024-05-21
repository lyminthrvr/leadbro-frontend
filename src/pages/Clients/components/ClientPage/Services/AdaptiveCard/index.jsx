import React from 'react';
import styles from "./Card.module.sass";
import Card from "../../../../../../shared/Card";
import Badge from "../../../../../../shared/Badge";
import Avatar from "../../../../../../shared/Avatar";
import cn from "classnames";
import {formatDate, formatDateWithoutHours} from "../../../../../../utils/formate.date";
import Button from "../../../../../../shared/Button ";

const AdaptiveCard = ({data,className,onPagination}) => {
    return (
        <div className={cn(styles.container,className)}>
            {data.map((original) => {
                return <Card className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.name}>{original?.description}</div>
                        <div className={styles.deadline}>{formatDate(original?.deadline)}</div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.avatar}><Avatar imageSrc={original?.creator?.image}/></div>
                        <div className={styles.avatar}><Avatar imageSrc={original?.responsible?.image}/></div>
                    </div>
                    {onPagination && <Button isSmallButton={false} name={'Показать еще(10)'}/>}
                </Card>
            })}
        </div>
    );
};

export default AdaptiveCard;