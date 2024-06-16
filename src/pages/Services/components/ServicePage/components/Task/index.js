import React from 'react';
import styles from './Task.module.sass'
import {
    formatDateWithDateAndYear,
    formatDateWithOnlyDigits,
    formatDateWithoutHours
} from "../../../../../../utils/formate.date";
import CardField from "../CardField";
import Button from "../../../../../../shared/Button ";
import Badge from "../../../../../../shared/Badge";
import ServiceBadge, {serviceStatuses} from "../Statuses";
import Image from "../../../../../../shared/Image";
import Icon from "../../../../../../shared/Icon";

const Task = ({ task, stageName }) => {
    return (
        <div className={styles.task_container}>
            <div>
                <CardField label={'ТЗ и сроки'}>
                    <div className={styles.taskDatesAndStatus}>
                        <Icon size={20} name={'calendar'}/>
                        <span>{formatDateWithOnlyDigits(task.startDate)} - {formatDateWithOnlyDigits(task.endDate)}</span>
                        <ServiceBadge statusType={serviceStatuses.tasks} status={task.status}/>
                    </div>

                </CardField>
            </div>
            <div>

            </div>
            <span>{task.description}</span>

        </div>
    );
};

export default Task;