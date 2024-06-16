import React from 'react';
import cn from "classnames";
import {colorStatusTaskTypes as taskTypes} from "../../../../services.types";
import {colorStatusActTypes as statusActTypes} from "../../../../services.types";
import {colorStatusBillTypes as billTypes} from "../../../../services.types";
import Badge from "../../../../../../shared/Badge";

export const serviceStatuses = {
    tasks: taskTypes,
    act: statusActTypes,
    bill: billTypes,
}


const ServiceBadge = ({statusType, status, classname}) => {
    return (
        <Badge status={status} classname={classname} statusType={statusType}/>
    );
};

export default ServiceBadge;