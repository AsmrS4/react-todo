import { Chip, ListItem, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './style.scss';
import { observer } from 'mobx-react';
import todoViewModel from '../../store/TodoViewModel';
import { useEffect, useState } from 'react';
import { DateUtils } from '../../utils';
import { EditModal } from '../modal/EditModal';

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

const taskPriority = ['критический', 'высокий', 'средний', 'низкий'];
interface TaskStatus {
    active: string;
    overdued: string;
    late: string;
    completed: string;
}
const taskStatuses: TaskStatus = {
    active: 'Активная',
    overdued: 'Просрочена',
    late: 'С опозданием',
    completed: 'Выполнена',
};

const TodoItem = observer(
    ({ id, title, text, deadline_at, status, completed, priority, index }: TodoProps) => {
        const [todoClassName, setClassName] = useState('todo__item');
        const [open, setOpen] = useState(false);

        const setTodoType = (deadline_at: string | null): void => {
            if (deadline_at) {
                if (DateUtils.isOverduedTask(deadline_at)) {
                    setClassName('todo__item --overdued');
                    return;
                } else if (DateUtils.isLateTask(deadline_at)) {
                    setClassName('todo__item --late');
                } else {
                    setClassName('todo__item');
                }
            }
        };

        useEffect(() => {
            setTodoType(deadline_at || null);
        }, [deadline_at]);

        return (
            <>
                <EditModal isOpen={open} setter={setOpen} id={id} />
                <ListItem
                    key={id}
                    className={completed ? 'todo__item --completed-item' : todoClassName}
                >
                    <div className='head-wrapper'>
                        <Typography className='item__title'>{index + '. ' + title}</Typography>
                        <Chip
                            size='small'
                            label={
                                completed
                                    ? deadline_at && DateUtils.isLateTask(deadline_at)
                                        ? taskStatuses['late']
                                        : taskStatuses['completed']
                                    : deadline_at && DateUtils.isLateTask(deadline_at)
                                    ? taskStatuses['overdued']
                                    : taskStatuses['active']
                            }
                        ></Chip>
                    </div>
                    <div className='item__inner-wrapper'>
                        {text && <Typography className='item__text'>{text}</Typography>}
                    </div>
                    <div className='item__footer'>
                        <div className='date-wrapper'>
                            <span>
                                {'Приоритет: ' + (taskPriority[--priority] || taskPriority[2])}
                            </span>
                            <span>
                                {'Дедлайн: ' +
                                    (deadline_at ? DateUtils.transformDate(deadline_at) : '--')}
                            </span>
                        </div>
                        <div className='buttons-wrapper'>
                            <IconButton
                                sx={{
                                    backgroundColor: 'inherit',
                                    transition: '0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: '#ffcc00',
                                    },
                                }}
                                size='small'
                            >
                                <EditIcon
                                    sx={{ color: '#fff' }}
                                    fontSize='small'
                                    onClick={() => {
                                        setOpen(true);
                                    }}
                                />
                            </IconButton>
                            <IconButton
                                sx={{
                                    backgroundColor: 'inherit',
                                    transition: '0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: '#ff6666',
                                    },
                                }}
                                aria-label='delete'
                                size='small'
                                onClick={() => {
                                    todoViewModel.deleteTodo(id);
                                }}
                            >
                                <DeleteIcon sx={{ color: '#fff' }} fontSize='small' />
                            </IconButton>
                        </div>
                    </div>
                </ListItem>
            </>
        );
    },
);

export default TodoItem;
