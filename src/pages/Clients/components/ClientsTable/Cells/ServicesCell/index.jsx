import React from 'react';
import styles from "./ServicesCell.module.sass";
import {formatDate} from "../../../../../../utils/formate.date";
import {Link} from "react-router-dom";

const ServicesCell = ({services}) => {
    console.log(services,0)
    return (
        <div className={styles.servicesCell}>
            {services.length && services.map((el) => (
                <div className={styles.services}>
                    <div className={styles.name}>
                        <Link>{el?.description}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesCell;