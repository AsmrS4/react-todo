import axios from 'axios';

interface QueryParams {
    sorting?: string,
    priority?: string,
    status?: string
}

interface TodoBody {
    title: string;
    text?: string;
    deadlineAt?: string;
    status: string;
    completed: boolean;
}

export const fetchTodos = async(params : QueryParams) : Promise<any> =>  {
    return await axios.get(`${import.meta.env.VITE_APP_API}/api/task`, {
        params: {
            ...params
        },
    })
    .then((response) =>  response.data)
    .catch(error => {throw new Error('Запрос с ошибкой: ' + error)});
} 

export const createTodo = async(todo : TodoBody) => {
    axios.post(`${import.meta.env}/task/create`, {
        data: {
            ...todo
        }
    })
    .then(response => response.data)
    .catch(error => {throw new Error('Запрос с ошибкой: ' + error)});
}