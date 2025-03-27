import { Chip, ListItem, Typography, IconButton } from '@mui/material';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TodoProps {
    id: string;
    title: string;
    text?: string;
    deadlineAt?: string;
    status: string;
    completed: boolean;
}

const TodoItem = ({ id, title, text, deadlineAt, status, completed }: TodoProps) => {
    return (
        <>
            <ListItem key={id} className={completed ? 'todo__item --completed-item' : 'todo__item'}>
                <div className='head-wrapper'>
                    <Typography className='item__title'>{title}</Typography>
                    <Chip size='small' label={status}></Chip>
                </div>
                <div className='item__inner-wrapper'>
                    <Typography className='item__text'>{text}</Typography>
                </div>
                <div className='item__footer'>
                    <div className='date-wrapper'>
                        {deadlineAt && (
                            <>
                                <RunningWithErrorsIcon sx={{ height: '14px', width: '14px' }} />
                                <h6>{deadlineAt}</h6>
                            </>
                        )}
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
                            <EditIcon sx={{ color: '#fff' }} fontSize='small' />
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
                        >
                            <DeleteIcon sx={{ color: '#fff' }} fontSize='small' />
                        </IconButton>
                    </div>
                </div>
            </ListItem>
        </>
    );
};

export default TodoItem;
