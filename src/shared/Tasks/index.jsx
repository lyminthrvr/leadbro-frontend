import React from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import TaskList from "./List";

const TasksManager = ({data,handleChange,counts}) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <TaskList data={{data,counts}} onChange={handleChange} />
        </DndProvider>
    );
};

export default TasksManager;