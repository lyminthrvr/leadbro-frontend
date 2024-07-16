// Import necessary libraries
import React from 'react';
import styles from './Time.module.sass';
import { compareTime } from '../../../../../../../../utils/compare';

const DeadLineTimeCell = ({ actualTime, deadLine }) => {
  const formatTime = (time) => {
    return parseFloat(time.toString().replace(',', '.')) + ' ' + time.toString().split(' ')[1];
  };

  const formattedActualTime = formatTime(actualTime);
  const formattedDeadLine = formatTime(deadLine);

  const isOverdue = compareTime(actualTime, deadLine);
  const cellColor = isOverdue ? styles.redDark : styles.green;

  return (
    <div className={`${styles.deadlineTimeCell} ${cellColor}`}>
      {formattedActualTime}  / {formattedDeadLine}
    </div>
  );
};

export default DeadLineTimeCell;
