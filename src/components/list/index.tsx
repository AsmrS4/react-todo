import { Chip, IconButton, List, ListItem, Typography } from '@mui/material';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './styles.scss';
import TodoItem from '../todo';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface TodoListProps {
    title: string;
    todos: Array<any>;
}

const TodoList = observer(({ title, todos = [] }: TodoListProps) => {
    useEffect(() => {
        console.log(todos);
    }, []);
    return (
        <>
            <section className='todo__body '>
                <h3 className='todo__list-header'>{title}</h3>
                <List className='todo__list'>
                    {todos ? (
                        todos.map((todo) => {
                            return <TodoItem {...todo} />;
                        })
                    ) : (
                        <>
                            <ListItem className='todo__item '>
                                <div className='head-wrapper'>
                                    <Typography className='item__title'>Активная задача</Typography>
                                    <Chip size='small' label={'Активная'}></Chip>
                                </div>
                                <div className='item__inner-wrapper'>
                                    <Typography className='item__text'>Активная задача</Typography>
                                </div>
                                <div className='item__footer'>
                                    <div className='date-wrapper'>
                                        <RunningWithErrorsIcon
                                            sx={{ height: '14px', width: '14px' }}
                                        />
                                        <h6>12/12/2025</h6>
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
                            <ListItem className='todo__item --overdued'>
                                <div className='head-wrapper'>
                                    <Typography className='item__title'>Активная задача</Typography>
                                    <Chip size='small' label={'Активная'}></Chip>
                                </div>
                                <div className='item__inner-wrapper'>
                                    <Typography className='item__text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Typography>
                                </div>
                                <div className='item__footer'>
                                    <div className='date-wrapper'>
                                        <RunningWithErrorsIcon
                                            sx={{ height: '14px', width: '14px' }}
                                        />
                                        <h6>12/12/2025</h6>
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
                            <ListItem className='todo__item --late'>
                                <div className='head-wrapper'>
                                    <Typography className='item__title'>
                                        Просроченная задача
                                    </Typography>
                                    <Chip size='small' label={'Просроченная'}></Chip>
                                </div>
                                <div className='item__inner-wrapper'>
                                    <Typography className='item__text'>
                                        Просроченная задача
                                    </Typography>
                                </div>
                                <div className='item__footer'>
                                    <div className='date-wrapper'>
                                        <RunningWithErrorsIcon
                                            sx={{ height: '14px', width: '14px' }}
                                        />
                                        <h6>12/12/2025</h6>
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
                    )}
                    <ListItem className='todo__item --completed-item'>
                        <div className='head-wrapper'>
                            <Typography className='item__title'>Выполненая</Typography>
                            <Chip size='small' label={'Выполнена'}></Chip>
                        </div>
                        <div className='item__inner-wrapper'>
                            <Typography className='item__text'>Задача выполнена</Typography>
                        </div>
                        <div className='item__footer'>
                            <div className='date-wrapper'>
                                <RunningWithErrorsIcon sx={{ height: '14px', width: '14px' }} />
                                <h6>12/12/2025</h6>
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
                </List>
            </section>
        </>
    );
});

export default TodoList;
