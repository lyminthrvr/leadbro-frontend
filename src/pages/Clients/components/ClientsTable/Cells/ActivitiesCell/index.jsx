import React from 'react';
import styles from './ActivitieslCell.module.sass'
import {format} from "date-fns";
import {formatDate, formatDateWithoutHours, formatHours} from "../../../../../../utils/formate.date";
import {Link} from "react-router-dom";
import { useState } from 'react';

const ActivitiesCell = ({ activities }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    return (
        <div className={styles.activitiesCell}>
            {activities.map((el, index) => (
                <React.Fragment key={index}>
                    {(showAll || index === 0) && (
                        <div className={styles.activity}>
                            <div className={styles.name}>
                                <Link>{el.description}</Link>
                            </div>
                            <div className={styles.deadline}>
                                {formatDateWithoutHours(el.date)}, {formatHours(el.time)}
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
            {activities.length > 1 && (
                <button onClick={toggleShowAll}>
                    {showAll ? 'Свернуть' : 'Раскрыть все'}
                </button>
            )}
        </div>
    );
};

export default ActivitiesCell;