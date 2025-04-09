interface ITodoViewModel {
    addTodo(todo: any) : void,
    deleteTodo(id: string) : void,
    getTodo(id: string) : Object,
    getAll(query?:string) : void
}

export default ITodoViewModel;