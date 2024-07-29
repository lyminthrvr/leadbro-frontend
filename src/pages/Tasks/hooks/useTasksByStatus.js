import {useEffect, useMemo, useState} from 'react';
import useStore from '../../../hooks/useStore';
import useTasks from "./useTasks";
import {
    colorStatusTaskTypes,
    colorStatusTaskTypesForTaskList,
    taskStatusTypes,
    taskStatusTypesRu
} from "../../Stages/stages.types";

const useTasksByStatus = () => {
    const {data: data} = useTasks();

    const statusedTasks = useMemo(() => {
        const filteredData = Object.values(taskStatusTypes).map((status) => ({
            type: status,
            typeRu: taskStatusTypesRu[status],

            values: data.filter((task) => task.status === status),
            color: { color: colorStatusTaskTypesForTaskList[status].class },
        }));
        return filteredData
    }, [data]);

    return statusedTasks;
};

export default useTasksByStatus;
