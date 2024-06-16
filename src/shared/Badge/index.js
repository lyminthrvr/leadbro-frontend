import React from 'react';
import styles from './Badge.module.sass'
import cn from "classnames";
import {colorStatusTypes as clientStatuses} from "../../pages/Clients/clients.types";
import {colorStatusTypes as servicesStatuses } from "../../pages/Services/services.types";

export const statusTypes = {
    clients: clientStatuses,
    services: servicesStatuses

}


const Badge = ({statusType, status, classname}) => {
    return (
        <div className={styles.container}>
            <div className={cn(`${statusType[status]?.class}`, styles.status, classname)}>
                {statusType[status]?.status}
            </div>
        </div>
    );
};

export default Badge;