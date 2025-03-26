import { useState, useEffect } from 'react';
import 'styles/index.scss';
import { Button, Chip, IconButton, List, ListItem, Typography } from '@mui/material';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function App() {
    return (
        <>
            <main className='todo__app'>
                <div className='container'>
                    <section className='todo__header'>
                        <div className='header'>
                            <h1 className='header__title'>Список задач</h1>
                        </div>
                        <div className='progress-bar'></div>
                    </section>
                    <div className='wrapper'>
                        <section className='todo__body --active'>
                            <div className='todo__filters'></div>
                            <List className='todo__list'>
                                <ListItem className='todo__item '>
                                    <div className='head-wrapper'>
                                        <Typography className='item__title'>
                                            Активная задача
                                        </Typography>
                                        <Chip size='small' label={'Активная'}></Chip>
                                    </div>
                                    <div className='item__inner-wrapper'>
                                        <Typography className='item__text'>
                                            Активная задача
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
                                                sx={{ backgroundColor: '#ffcc00' }}
                                                size='small'
                                            >
                                                <EditIcon sx={{ color: '#fff' }} fontSize='small' />
                                            </IconButton>
                                            <IconButton
                                                sx={{ backgroundColor: '#ff6666' }}
                                                aria-label='delete'
                                                size='small'
                                            >
                                                <DeleteIcon
                                                    sx={{ color: '#fff' }}
                                                    fontSize='small'
                                                />
                                            </IconButton>
                                        </div>
                                    </div>
                                </ListItem>
                                <ListItem className='todo__item --overdued'>
                                    <div className='head-wrapper'>
                                        <Typography className='item__title'>
                                            Активная задача
                                        </Typography>
                                        <Chip size='small' label={'Активная'}></Chip>
                                    </div>
                                    <div className='item__inner-wrapper'>
                                        <Typography className='item__text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum.
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
                                                sx={{ backgroundColor: '#ffcc00' }}
                                                size='small'
                                            >
                                                <EditIcon sx={{ color: '#fff' }} fontSize='small' />
                                            </IconButton>
                                            <IconButton
                                                sx={{ backgroundColor: '#ff6666' }}
                                                aria-label='delete'
                                                size='small'
                                            >
                                                <DeleteIcon
                                                    sx={{ color: '#fff' }}
                                                    fontSize='small'
                                                />
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
                                                sx={{ backgroundColor: '#ffcc00' }}
                                                size='small'
                                            >
                                                <EditIcon sx={{ color: '#fff' }} fontSize='small' />
                                            </IconButton>
                                            <IconButton
                                                sx={{ backgroundColor: '#ff6666' }}
                                                aria-label='delete'
                                                size='small'
                                            >
                                                <DeleteIcon
                                                    sx={{ color: '#fff' }}
                                                    fontSize='small'
                                                />
                                            </IconButton>
                                        </div>
                                    </div>
                                </ListItem>
                            </List>
                        </section>
                        <section className='todo__body --completed'>
                            <List className='todo__list'>
                                <ListItem className='todo__item --completed_item'>
                                    <Typography>Выполненая задача</Typography>
                                    <Chip label={'Выполнена'}></Chip>
                                </ListItem>
                                <ListItem className='todo__item --completed_item'>
                                    <Typography>Выполненая задача</Typography>
                                    <Chip label={'Выполнена'}></Chip>
                                </ListItem>
                                <ListItem className='todo__item --completed_item'>
                                    <Typography>Выполненая задача</Typography>
                                    <Chip label={'Выполнена'}></Chip>
                                </ListItem>
                            </List>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
