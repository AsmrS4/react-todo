import React from 'react';
import { Chip, ListItem, Typography } from '@mui/material';

const TodoItem = () => {
    return (
        <>
            <ListItem className='todo__item '>
                <Typography>Активная задача</Typography>
                <Chip label={'Активная'}></Chip>
            </ListItem>
        </>
    );
};

export default TodoItem;
