import { TodoDto } from "src/dto/todo/TodoDto";
import TodoService from "../api/TodoService";
import ITodoViewModel from "./ITodoViewModel";
import {makeAutoObservable, runInAction} from 'mobx';

class TodoViewModel implements ITodoViewModel {
    private todoService: TodoService;
    todos: Array<any> = [];
    isOpen: boolean;

    constructor() {
        makeAutoObservable(this);
        this.getAll({});
        this.isOpen = false;
        this.todoService = new TodoService();
    }

    public addTodo = async(todo: TodoDto): Promise<void> =>{
        try {
            await this.todoService.createTodo(todo);
            console.log('asdas')
            runInAction(async()=> {
                await this.getAll();
            })
        } catch (error) {
            
        }
    }

    public deleteTodo = async(id: string): Promise<void> =>{
        try {
            await this.todoService.deleteTodo(id);
            runInAction(()=> {
                this.todos = this.todos.filter(todo => todo.id !== id);
            })
        } catch (error) {
            
        }
        
    }

    public editTodo = async(id: string): Promise<void> =>{
        
    }

    public getTodo = async(id: string): Promise<Object> => {
        return new Object
    }

    public getAll = async(params?: Object | null): Promise<void> => {
        try {
            const result: Array<any> = await this.todoService.fetchTodos(params||{});
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