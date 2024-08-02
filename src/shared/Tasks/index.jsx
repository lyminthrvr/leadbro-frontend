import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import TaskList from './List';
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
const Backend = isMobile ? TouchBackend : HTML5Backend;
const TasksManager = ({ data, handleChange, counts }) => {
  return (
    <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
      <TaskList data={{ data, counts }} onChange={handleChange} />
    </DndProvider>
  );
};

export default TasksManager;
