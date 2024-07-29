import React from 'react';
import {useDrag} from "react-dnd";
import styles from "../List/List.module.sass";
import Card from "../../Card";
import Badge, {statusTypes} from "../../Badge";
import TooltipedAvatar from "../../Avatar/Tooltiped";
import {formatDateWithoutHours} from "../../../utils/formate.date";

const Task = ({ task }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={styles.task}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            {/*<h3>{task.title}</h3>*/}
            {/*<p>{task.description}</p>*/}
            {/*<p>Status: {task.status}</p>*/}
            <Card className={styles.task}>
                <div className={styles.task_stageTitle}>{task.stage.title}</div>
                <div className={styles.task_description}>{task.title}</div>
                <div className={styles.task_deadline}>{formatDateWithoutHours(task.deadline)}</div>
                <div className={styles.task_footer}>
                    <Badge statusType={statusTypes.tasks} status={task.type}/>
                    <div>{task.assigned.map(el=> <TooltipedAvatar imageSrc={el.image} title={`${el.name} ${el.surname}`}/>)}</div>
                </div>


            </Card>
        </div>
    );
};

export default Task;