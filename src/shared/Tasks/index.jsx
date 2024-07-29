import React from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import TaskList from "./List";

const TasksManager = ({data,handleChange}) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <TaskList data={data} onChange={handleChange} />
        </DndProvider>
    );
};

export default TasksManager;