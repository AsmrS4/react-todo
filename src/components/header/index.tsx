import { useMemo, useState } from 'react';
import './styles.scss';
import todoViewModel from '../../store/TodoViewModel';
import { observer } from 'mobx-react';

const TodoHeader = () => {
    const [completedCount, setCompletedCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const proccessTodosCount = useMemo(() => {
        setTotalCount(todoViewModel.todos.length);
        setCompletedCount(todoViewModel.todos.filter((todo) => todo.completed).length);
    }, [todoViewModel.todos]);

    return (
        <>
            <section className='todo__header'>
                <div className='header'>
                    <h1 className='header__title'>
                        {totalCount > 0 ? (
                            <>
                                TODO Done:
                                <span>{completedCount + ' / ' + totalCount}</span>
                            </>
                        ) : (
                            <>У вас не задач</>
                        )}
                    </h1>
                </div>
            </section>
        </>
    );
};

export default observer(TodoHeader);
