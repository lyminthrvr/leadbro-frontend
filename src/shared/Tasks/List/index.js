import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './List.module.sass';
import cn from "classnames";
import Task from "../Task";

const TaskList = ({ data:{data,counts}, onChange, }) => {
    const handleDrop = (taskId, newStatus) => {
        onChange(taskId, newStatus);
    };

    return (
        <div className={styles.taskList}>
            {data.map((column) => (
                <Column
                    typeRu={column.typeRu}
                    key={column.type}
                    type={column.type}
                    values={column.values}
                    color={column.color.color}
                    onDrop={handleDrop}
                    count={counts[column.type]}
                />
            ))}
        </div>
    );
};

const Column = ({ type,typeRu, values, color, onDrop,count }) => {
    debugger
    const [, drop] = useDrop({
        accept: 'TASK',
        drop: (item) => onDrop(item.id, type),
    });

    return (

        <div ref={drop} className={styles.column} style={{ borderColor: color }}>
            <div className={styles.header}>{typeRu} <span className={styles.counts}>{count}</span></div>
            <div className={cn(color,styles.divider)}></div>
            {values.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};



export default TaskList;
