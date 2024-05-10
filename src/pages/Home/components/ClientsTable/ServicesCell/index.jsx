import React from 'react';
import styles from "../ActivitiesCell/ActivitieslCell.module.sass";
import {formatDate} from "../../../../../utils/formate.date";

const ServicesCell = ({services}) => {
    return (
        <div className={styles.servicesCell}>
            {services.map((el) => (
                <div className={styles.services}>
                    <div className={styles.name}>
                        {el.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesCell;