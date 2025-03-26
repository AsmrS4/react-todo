import { useState, useEffect } from 'react';
import 'styles/index.scss';
import { Chip, List, ListItem, Typography } from '@mui/material';

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
                                    <Typography>Активная задача</Typography>
                                    <Chip label={'Активная'}></Chip>
                                </ListItem>
                                <ListItem className='todo__item --overdued'>
                                    <Typography>ыыввывывы</Typography>
                                    <Chip label={'Активная'}></Chip>
                                </ListItem>
                                <ListItem className='todo__item --late'>
                                    <Typography>Просроченная задача</Typography>
                                    <Chip label={'Просрочена'}></Chip>
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
