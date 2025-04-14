import { Fab } from '@mui/material';
import { observer } from 'mobx-react';

import Filters from '../components/filter';
import TodoList from '../components/list';
import TodoHeader from '../components/header';
import todoViewModel from '../store/TodoViewModel';
import { CreateModal } from '../components/modal/CreateModal';
import CreateIcon from '@mui/icons-material/Create';

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
                        </div>
                    </div>
                </div>
                <div className='abs-layout'>
                    <Fab
                        onClick={() => {
                            todoViewModel.openModal();
                        }}
                    >
                        <CreateIcon sx={{ width: '24px', height: '24px' }} />
                    </Fab>
                </div>
            </main>
            <CreateModal />
        </>
    );
});

export default Main;
