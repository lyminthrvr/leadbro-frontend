import React from 'react';
import styles from './stages.module.sass'
import {Link} from "react-router-dom";
import {truncateString} from "../../../../../../utils/format.string";

const StagesCell = ({stages,maxCellLength=-1}) => {

    return (
        <div className={styles.servicesCell}>
            {stages?.length && stages.map((el) => (
                <div className={styles.services}>
                    <div className={styles.name}>
                        <Link>{truncateString(el?.title,maxCellLength)}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StagesCell;