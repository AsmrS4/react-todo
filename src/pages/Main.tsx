import { Button } from '@mui/material';
import Filters from '../components/filter';
import TodoList from '../components/list';
import TodoHeader from '../components/header';
import { observer } from 'mobx-react';
import TodoViewModel from '../store/TodoViewModel';
import todoViewModel from '../store/TodoViewModel';

const Main = observer(() => {
    return (
        <>
            <main className='todo__app'>
                <div className='container'>
                    <TodoHeader />
                    <div className='wrapper row'>
                        <div className='wrapper'>
                            <TodoList title='Активные задачи' todos={todoViewModel.todos} />
                            <TodoList title='Выполненные задачи' todos={[]} />
                        </div>
                        <div className='wrapper-column'>
                            <Filters />
                            <Button variant='outlined' sx={{ width: 1 }}>
                                Новая задача
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
});

export default Main;
