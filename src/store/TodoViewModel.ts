import { TodoDto } from "src/dto/todo/TodoDto";
import TodoService from "../api/TodoService";
import ITodoViewModel from "./ITodoViewModel";
import {makeAutoObservable, runInAction} from 'mobx';

class TodoViewModel implements ITodoViewModel {
    todoService: TodoService = new TodoService();
    todos: Array<any> = [];
    isOpen: boolean;
    isEditOpen: boolean;

    constructor() {
        makeAutoObservable(this);
        this.getAll({});
        this.isOpen = false;
        this.isEditOpen = false;
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

    public editTodo = async(id: string): Promise<void> =>{
        
    }

    public getTodo = async(id: string): Promise<any> => {
        try {
            const result = await this.todoService.getTodoById(id);
            runInAction(()=> {
                return result;
            })
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

    public openEditModal = () => {
        this.isEditOpen = true;
    }

    public closeEditModal = () => {
        this.isEditOpen = false;
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