import { observer } from 'mobx-react';
import { List } from '@mui/material';

import './styles.scss';
import TodoItem from '../todo';
import { useEffect } from 'react';

interface TodoListProps {
    todos: Array<TodoProps>;
}

interface TodoProps {
    id: string;
    title: string;
    text?: string;
    deadline_at?: string;
    created_at: string;
    status: string;
    priority: number;
    completed: boolean;
    index: number;
}

const TodoList = observer(({ todos = [] }: TodoListProps) => {
    useEffect(() => {
        todos.sort((a, b) => {
            return a.created_at > b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0;
        });
        todos.sort((a, b) => {
            return a.completed > b.completed ? 1 : a.completed < b.completed ? -1 : 0;
        });
        console.log(todos);
    }, [todos]);
    return (
        <>
            <section className='todo__body '>
                {todos.length > 0 ? (
                    <List className='todo__list'>
                        {todos.map((todo, index) => {
                            return <TodoItem key={todo.id} {...todo} index={++index} />;
                        })}
                    </List>
                ) : (
                    <>
                        <div className='empty__todos'>
                            <h2 className='empty__label'>{'У вас нет задач'}</h2>
                        </div>
                    </>
                )}
            </section>
        </>
    );
});

export default TodoList;
