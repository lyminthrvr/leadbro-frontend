import React, {useMemo, useState} from 'react';
import TasksTable from "./components/TasksTable";
import Title from "../../shared/Title";
import TaskFilter from "./components/TaskFilter";
import useStore from "../../hooks/useStore";
import useTasksByStatus from "./hooks/useTasksByStatus";
import {observer} from "mobx-react";
import {taskStatusTypes} from "../Stages/stages.types";
import styles from './tasks.module.sass'

const Index = observer(() => {
    const data = useTasksByStatus();
    const { tasksStore } = useStore();

    const getCountStatusTask = (type) => {
        const tasks = data.filter(task => task.type === type)[0];
        return tasks.values.length
    }

    const [statusFilters, setStatusFilters] = useState({
        inProgress: true,
        finished: true,
        created: true,
        onReview: true,
        onHold: true,
    });

    const handleCheckboxChange = (status, isChecked) => {
        setStatusFilters((prevFilters) => ({
            ...prevFilters,
            [status]: isChecked,
        }));
    };

    const handleChange = (taskId, newStatus) => {
        tasksStore.changeById(taskId, `status`, newStatus, true);
    };

    const filteredTasks = data.filter(task => statusFilters[task.type]);

    const taskCounts = useMemo(()=>{
        debugger
        return Object.keys(taskStatusTypes).reduce((acc, status) => {
            acc[status] = getCountStatusTask(status);
            return acc;
        }, {})
    },[data]);

    return (
        <>
            <Title
                title={"Мои задачи"}
                actions={{
                    filter: {
                        classNameBody:styles.filter_container,
                        title: 'Фильтр',
                        children: (
                            <TaskFilter
                                filters={statusFilters}
                                onChange={handleCheckboxChange}
                                taskCounts={taskCounts}
                            />
                        )
                    }
                }}
            />

            <TasksTable counts = {taskCounts} data={filteredTasks} handleChange={handleChange} />
        </>
    );
});

export default Index;
