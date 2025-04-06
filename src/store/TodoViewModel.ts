import { TodoDto } from "src/dto/todo/TodoDto";
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
    todos: Array<any> = [];
    isOpen: boolean;
    todo:any;

    constructor() {
        makeAutoObservable(this);
        this.getAll({});
        this.isOpen = false;
    }

    public addTodo = async(todo: TodoDto): Promise<void> =>{
        try {
            await this.todoService.createTodo(todo);
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

    public editTodo = async(id: string, newTodo:EditParams): Promise<void> =>{
        console.log(newTodo)
        try {
            await this.todoService.editTodo(id, newTodo);
            runInAction(async()=> {
                await this.getAll()
            })
        } catch (error) {
            
        }
    }


    public getTodo = async(id:string): Promise<any> => {
        try {
            return await this.todoService.getTodoById(id);
        } catch (error) {
            
        }
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

    public openModal = async() => {
        this.isOpen = true;
    }

    public closeModal = async() => {
        this.isOpen = false;
    }   
}

const todoViewModel = new TodoViewModel()
export default todoViewModel;