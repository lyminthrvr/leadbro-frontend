import React from 'react';
import cn from "classnames";
import {colorStatusTaskTypes as taskTypes} from "../../../../services.types";
import {colorStatusActTypes as statusActTypes} from "../../../../services.types";
import {colorStatusBillTypes as billTypes} from "../../../../services.types";
import Badge from "../../../../../../shared/Badge";
import styles from './Statuses.module.sass'

export const serviceStatuses = {
    tasks: taskTypes,
    act: statusActTypes,
    bill: billTypes,
}


const ServiceBadge = ({statusType, status,cls}) => {
    return (
        <Badge status={status} classname={cn(styles.status,cls)} statusType={statusType}/>
    );
};

export default ServiceBadge;