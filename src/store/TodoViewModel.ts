import { TodoDto, TodoProps } from "src/dto/todo/TodoDto";
import TodoService from "../api/TodoService";
import ITodoViewModel from "./ITodoViewModel";
import {makeAutoObservable, runInAction} from 'mobx';

interface EditParams {
    text?: string,
    title:string,
    priority:number|string,
    deadline_at?:string,
    completed: boolean
}

class TodoViewModel implements ITodoViewModel {
    todoService: TodoService = new TodoService();
    todos: Array<TodoProps> = [];
    isOpen: boolean;
    todo:any;
    hasError: boolean = false;
    private queryParams:Object={};

    constructor() {
        makeAutoObservable(this);
        this.getAll();
        this.isOpen = false;
    }
    public setTodos(todos: Array<TodoProps>) {
        this.todos = todos;
    }
    public setQueryParams(params: Object) {
        this.queryParams = params;
        runInAction(async()=> {
            await this.getAll();
        })
    }
    public addTodo = async(todo: TodoDto): Promise<void> =>{
        try {
            await this.todoService.createTodo(todo);
            runInAction(async()=> {
                await this.getAll();
            })
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
    }

    public deleteTodo = async(id: string): Promise<void> =>{
        try {
            await this.todoService.deleteTodo(id);
            runInAction(()=> {
                this.hasError = false;
                this.todos = this.todos.filter(todo => todo.id !== id);
            })
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
        
    }

    public editTodo = async(id: string, newTodo:EditParams): Promise<void> =>{
        try {
            await this.todoService.editTodo(id, newTodo);
            runInAction(async()=> {
                await this.getAll()
            })
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
    }

    public changeStatus = async(id: string, status:boolean): Promise<void> => {
        try {
            await this.todoService.changeStatus(id, status);
            runInAction(async()=> {
                await this.getAll()
            })
            
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
    }

    public getTodo = async(id:string): Promise<any> => {
        try {
            this.hasError = false;
            return await this.todoService.getTodoById(id);  
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
    }

    public getAll = async(): Promise<void> => {
        try {
            const result: Array<any> = await this.todoService.fetchTodos(this.queryParams);
            runInAction(()=> {
                this.hasError = false;
                this.todos = result;
                this.todos.sort((a, b) => {
                    return a.created_at > b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0;
                });
                this.todos.sort((a, b) => {
                    return a.completed > b.completed ? 1 : a.completed < b.completed ? -1 : 0;
                });
            })
        } catch (error) {
            runInAction(()=> {
                this.hasError = true;
            })
        }
    }

    public openModal = async() => {
        this.isOpen = true;
    }

    public closeModal = async() => {
        this.isOpen = false;
    }   
}

const todoViewModel = new TodoViewModel()
export default todoViewModel;