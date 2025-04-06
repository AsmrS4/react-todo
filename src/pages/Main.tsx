import { Button } from '@mui/material';
import { observer } from 'mobx-react';

import Filters from '../components/filter';
import TodoList from '../components/list';
import TodoHeader from '../components/header';
import todoViewModel from '../store/TodoViewModel';
import { CreateModal } from '../components/modal/CreateModal';
import { EditModal } from '../components/modal/EditModal';

const Main = observer(() => {
    return (
        <>
            <main className='todo__app'>
                <div className='container'>
                    <TodoHeader />
                    <div className='wrapper row'>
                        <div className='wrapper'>
                            <TodoList todos={todoViewModel.todos} />
                        </div>
                        <div className='wrapper-column'>
                            <Filters />
                            <Button
                                className='button'
                                sx={{ width: '92%' }}
                                onClick={() => {
                                    todoViewModel.openModal();
                                }}
                            >
                                Новая задача +
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <CreateModal />
        </>
    );
});

export default Main;
