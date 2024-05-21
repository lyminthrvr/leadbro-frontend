import React, {useMemo} from 'react';
import styles from "./Card.module.sass";
import Card from "../../../../../../shared/Card";
import Badge from "../../../../../../shared/Badge";
import Avatar from "../../../../../../shared/Avatar";
import Button from "../../../../../../shared/Button ";
import {formatDateWithoutHours, formatHours} from "../../../../../../utils/formate.date";
import Tooltip from "../../../../../../shared/Tooltip";
import ManagerCell from "../../../ClientsTable/Cells/ManagerCell";
import ActivityType from "../Type";

const AdaptiveCard = ({data, onPagination}) => {
    const groupByDate = (items) => {
        return items?.reduce((acc, item) => {
            const date = new Date(item.date);
            const dateString = date.toISOString().split('T')[0]; // Извлекаем YYYY-MM-DD

            if (!acc[dateString]) {
                acc[dateString] = [];
            }
            acc[dateString].push(item);

            return acc;
        }, {});
    };

    const groupedItems = useMemo(() => groupByDate(data), [data]);
    return (
        <Card className={styles.container}>
            {Object.keys(groupedItems).map((date) => {
                return <div className={styles.card}>
                    <div key={date}>
                        <p>{formatDateWithoutHours(new Date(date))}</p>
                        {groupedItems[date].map((item, index) => (
                            <div className={styles.body} key={index}>
                                <div>
                                    <div>{item.description}</div>
                                    <div>{formatHours(item.time)}</div>
                                </div>
                                <div>
                                    <Tooltip title={`123`}>
                                        <Avatar imageSrc={item?.assignee.image}/>
                                    </Tooltip>
                                </div>
                                <div>
                                    <ActivityType className={styles.cell_manager} type={item.type} membersCount={item.members}/>
                                </div>
                                {/* Другие поля объекта */}
                            </div>
                        ))}
                    </div>
                </div>
            })}
            {onPagination && <Button isSmallButton={false} name={'Показать еще(10)'}/>}

        </Card>
    );
};

export default AdaptiveCard;