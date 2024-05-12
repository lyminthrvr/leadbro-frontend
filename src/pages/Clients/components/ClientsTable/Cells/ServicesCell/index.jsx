import React from 'react';
import styles from "../ActivitiesCell/ActivitieslCell.module.sass";
import {formatDate} from "../../../../../../utils/formate.date";

const ServicesCell = ({services}) => {
    console.log(services,0)
    return (
        <div className={styles.servicesCell}>
            {services.length && services.map((el) => (
                <div className={styles.services}>
                    <div className={styles.name}>
                        {el?.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesCell;