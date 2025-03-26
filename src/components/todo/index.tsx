import { Chip, ListItem, Typography, IconButton } from '@mui/material';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface TodoProps {
    id: string;
    title: string;
    text?: string;
    deadlineAt?: Date;
    createdAt: Date;
    modifiedAt: Date;
    status: string;
    completed: boolean;
}

const TodoItem = ({
    id,
    title,
    text,
    deadlineAt,
    createdAt,
    modifiedAt,
    status,
    completed,
}: TodoProps) => {
    return (
        <>
            <ListItem key={id} className='todo__item '>
                <div className='head-wrapper'>
                    <Typography className='item__title'>Активная задача</Typography>
                    <Chip size='small' label={'Активная'}></Chip>
                </div>
                <div className='item__inner-wrapper'>
                    <Typography className='item__text'>Активная задача</Typography>
                </div>
                <div className='item__footer'>
                    <div className='date-wrapper'>
                        <RunningWithErrorsIcon sx={{ height: '14px', width: '14px' }} />
                        <h6>12/12/2025</h6>
                    </div>
                    <div className='buttons-wrapper'>
                        <IconButton size='small'>
                            <EditIcon fontSize='small' />
                        </IconButton>
                        <IconButton aria-label='delete' size='small'>
                            <DeleteIcon fontSize='small' />
                        </IconButton>
                    </div>
                </div>
            </ListItem>
        </>
    );
};

export default TodoItem;
