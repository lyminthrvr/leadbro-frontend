import {
    handleHttpError,
    handleHttpResponse,
    http,
    mockHttp,
} from '../../shared/http';
import mocks from './tasks.mocks';
import useStore from '../../hooks/useStore';

mockHttp.onGet('/tasks').reply(200, mocks.createTasks());
mockHttp.onPost('/tasks').reply(200, mocks.createTasks());
mockHttp.onGet(/\/tasks\/\d+/).reply((config) => {
    const urlParts = config.url.split('/');
    const taskId = parseInt(urlParts[urlParts.length - 1]);
    const tasks = mocks.createTasks();
    const task = tasks.find((c) => c.id === taskId);

    if (task) {
        return [200, task];
    } else {
        console.log(`Task with id ${taskId} not found`);
        return [404, { message: 'Task not found' }];
    }
});

const useTasksApi = () => {
    const { tasksStore } = useStore();

    const getTasks = () => {
        return http
            .get('/tasks')
            .then(handleHttpResponse)
            .then((res) => tasksStore.setTasks(res.body))
            .then(() => tasksStore.getTasks())
            .catch(handleHttpError);
    };

    const getTaskById = (id) => {
        return http
            .get(`/tasks/${id}`)
            .then(handleHttpResponse)
            .then((res) => tasksStore.setCurrentTask(res.body))
            .catch(handleHttpError);
    };

    const setTasks = (body) => {
        return http
            .post('/tasks', body)
            .then(handleHttpResponse)
            .then((res) => tasksStore.setTasks(res.body))
            .catch(handleHttpError);
    };

    return {
        getTasks,
        getTaskById,
        setTasks,
    };
};

export default useTasksApi;
