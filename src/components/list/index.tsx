import { observer } from 'mobx-react';
import { List } from '@mui/material';

import './styles.scss';
import TodoItem from '../todo';
import { useEffect } from 'react';

interface TodoListProps {
    todos: Array<any>;
}

const TodoList = observer(({ todos = [] }: TodoListProps) => {
    useEffect(() => {}, [todos]);
    return (
        <>
            <section className='todo__body '>
                {todos.length > 0 ? (
                    <List className='todo__list'>
                        {todos.map((todo) => {
                            return <TodoItem key={todo.id} {...todo} />;
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
