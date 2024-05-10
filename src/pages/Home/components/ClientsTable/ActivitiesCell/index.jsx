import React from 'react';
import styles from './ActivitieslCell.module.sass'
import {format} from "date-fns";
import {formatDate} from "../../../../../utils/formate.date";
const ActivitiesCell = ({activities}) => {
    return (
        <div className={styles.activitiesCell}>
            {activities.map((el)=>(
                <div className={styles.activity}>
                    <div className={styles.name}>
                        {el.name}
                    </div>
                    <div className={styles.deadline}>
                        {formatDate(el.deadline)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivitiesCell;