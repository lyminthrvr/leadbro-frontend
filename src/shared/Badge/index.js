import React from 'react';
import styles from './Badge.module.sass'
import cn from "classnames";
import {colorStatusTypes as clientStatuses} from "../../pages/Home/home.types";

export const statusTypes = {
    clients:clientStatuses
}


const Badge = ({statusType,status,classname}) => {
    console.log(statusTypes[status],'badge')
    return (
        <div className={cn(`${statusType[status].class}`, styles.status, classname)}>
            {statusType[status].status}
        </div>
    );
};

export default Badge;