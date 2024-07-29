import React from 'react';
import Checkbox from "../../../../shared/Checkbox";
import {taskStatusTypes, taskStatusTypesRu} from "../../../Stages/stages.types";
import styles from './Filter.module.sass'
const TaskFilter = ({ filters, onChange, taskCounts }) => {

    return (
        <div>
            {Object.keys(taskStatusTypes).map(status => (
                <Checkbox
                    className={styles.container}
                    key={status}
                    status={status}
                    content={<div className={styles.label}>{taskStatusTypesRu[status]} <span className={styles.count}>{taskCounts[status] || 0}</span></div>}
                    value={filters[status]}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default TaskFilter;