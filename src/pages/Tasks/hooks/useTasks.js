import React, { useEffect, useMemo, useState } from 'react';
import useStore from '../../../hooks/useStore';
import useTasksApi from '../tasks.api';

const useTasks = (id = null) => {
    const { tasksStore } = useStore();
    const api = useTasksApi();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                if (id !== null) {
                    if (!tasksStore.tasks.length) {
                        await api.getTaskById(id);
                    }
                } else if (!tasksStore.tasks.length) {
                    await api.getTasks();
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [tasksStore, id, api]);

    const result = useMemo(() => {
        if (id !== null) {
            return tasksStore.getById(id) || api.getTaskById(id);
        } else {
            return tasksStore.getTasks();
        }
    }, [id, tasksStore.tasks, api]);

    return { data: result, isLoading };
};

export default useTasks;
