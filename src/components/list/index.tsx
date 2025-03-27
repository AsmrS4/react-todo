import { observer } from 'mobx-react';
import { List } from '@mui/material';

import './styles.scss';
import TodoItem from '../todo';

interface TodoListProps {
    todos: Array<any>;
}

const TodoList = observer(({ todos = [] }: TodoListProps) => {
    return (
        <>
            <section className='todo__body '>
                {todos ? (
                    <List className='todo__list'>
                        {todos.map((todo) => {
                            return <TodoItem {...todo} />;
                        })}
                    </List>
                ) : (
                    <></>
                )}
            </section>
        </>
    );
});

export default TodoList;
