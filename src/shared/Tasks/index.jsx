import React, { useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import TaskList from './List';
import { useDndScrolling } from 'react-dnd-scrolling';
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
const Backend = isMobile ? TouchBackend : HTML5Backend;

const TasksManager = ({ data, handleChange, counts }) => {
  return (
    <DndProvider
      backend={Backend}
      options={
        isMobile
          ? { enableMouseEvents: true, delayTouchStart: 0, delayMouseStart: 0 }
          : undefined
      }
    >
      <div>{isMobile ? 'mobile' : 'not mobile'}</div>
      <TaskList data={{ data, counts }} onChange={handleChange} />
    </DndProvider>
  );
};
export default TasksManager;
