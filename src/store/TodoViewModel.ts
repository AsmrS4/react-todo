import { fetchTodos } from "../api/TodoService";
import ITodoViewModel from "./ITodoViewModel";
import {makeAutoObservable, runInAction} from 'mobx';

class TodoViewModel implements ITodoViewModel {
    
    todos: Array<any> = [];
    
    constructor() {
        makeAutoObservable(this);
        this.getAll({});
    }

    addTodo = async(todo: any): Promise<void> =>{
        
    }

    deleteTodo = async(id: string): Promise<void> =>{
        
    }

    editTodo = async(id: string): Promise<void> =>{
        
    }

    getTodo = async(id: string): Promise<Object> => {
        return new Object
    }

    getAll = async(params?: Object | null): Promise<void> => {
        try {
            const result: Array<any> = await fetchTodos(params||{});
            console.log(result);
            runInAction(()=> {
                this.todos = result;
            })
        } catch (error) {
            
        }
    }
    
    
}

const todoViewModel = new TodoViewModel()
export default todoViewModel;