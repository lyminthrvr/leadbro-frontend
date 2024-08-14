import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './List.module.sass';
import cn from 'classnames';
import Task from '../Task';
import withScrolling from 'react-dnd-scrolling';

const ScrollingComponent = withScrolling('div');

const TaskList = ({ data: { data, counts }, onChange }) => {
  const handleDrop = (taskId, newStatus) => {
    onChange(taskId, newStatus);
  };

  return (
    <ScrollingComponent className={styles.taskList}>
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
    </ScrollingComponent>
  );
};

const Column = ({ type, typeRu, values, color, onDrop, count }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.id, type),
  });

  return (
    <div ref={drop} className={styles.column} style={{ borderColor: color }}>
      <div className={styles.header}>
        {typeRu} <span className={styles.counts}>{count}</span>
      </div>
      <div className={cn(color, styles.divider)}></div>
      <div className={styles.scroll}>
        {values.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
