import React from 'react';
import styles from './Badge.module.sass'
import cn from "classnames";
import {colorStatusTypes as clientStatuses} from "../../pages/Clients/clients.types";

export const statusTypes = {
    clients: clientStatuses
}


const Badge = ({statusType, status, classname}) => {
    console.log(statusTypes[status], 'badge')
    return (
        <div className={styles.container}>
            <div className={cn(`${statusType[status]?.class}`, styles.status, classname)}>
                {statusType[status]?.status}
            </div>
        </div>
    );
};

export default Badge;