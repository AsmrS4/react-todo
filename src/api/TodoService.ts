import axios from 'axios';
import { TodoDto } from 'src/dto/todo/TodoDto';

interface QueryParams {
    sorting?: string,
    priority?: string,
    status?: string
}

class TodoService {

        public fetchTodos = async(params : QueryParams) : Promise<any> =>  {
        return await axios.get(`${import.meta.env.VITE_APP_API}/api/task`, {
            params: {
                ...params
            },
        })
        .then((response) =>  response.data)
        .catch(error => {throw new Error('Запрос с ошибкой: ' + error)});
    } 

    public createTodo = async(todo : TodoDto) => {
        axios.post(`${import.meta.env.VITE_APP_API}/api/task/new`, {
            ...todo
        })
        .then(response => response.data)
        .catch(error => {throw new Error('Запрос с ошибкой: ' + error)});
    }

    public deleteTodo = async(todoId: string) => {
        axios.delete(`${import.meta.env.VITE_APP_API}/api/task/delete/${todoId}`)
        .then(response => response.data)
        .catch(e => {throw new Error('Запрос с ошибкой: ' + e)});
    }
}

export default TodoService;