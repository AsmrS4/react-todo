import { fetchTodos } from "../api/TodoService";
import ITodoViewModel from "./ITodoViewModel";
import {makeAutoObservable, runInAction} from 'mobx';

class TodoViewModel implements ITodoViewModel {
    
    todos: Array<any> = [];
    isOpen: boolean;

    constructor() {
        makeAutoObservable(this);
        this.getAll({});
        this.isOpen = false;
    }

    public addTodo = async(todo: any): Promise<void> =>{
        
    }

    public deleteTodo = async(id: string): Promise<void> =>{
        
    }

    public editTodo = async(id: string): Promise<void> =>{
        
    }

    public getTodo = async(id: string): Promise<Object> => {
        return new Object
    }

    public getAll = async(params?: Object | null): Promise<void> => {
        try {
            const result: Array<any> = await fetchTodos(params||{});
            console.log(result);
            runInAction(()=> {
                this.todos = result;
            })
        } catch (error) {
            
        }
    }

    public openModal = () => {
        this.isOpen = true;
    }

    public closeModal = () => {
        this.isOpen = false;
    }
    
}

const todoViewModel = new TodoViewModel()
export default todoViewModel;