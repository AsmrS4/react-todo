import { Button } from '@mui/material';
import SelectInput from '../select';
import './styles.scss';
import CustomSwitch from '../switch/TodoSwitch';
import { useEffect, useRef, useState } from 'react';

const Filters = () => {
    const [sorting, setSorting] = useState('ASC');
    const [priority, setPriority] = useState('ASC');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log(sorting);
        console.log(priority);
        console.log(checked);
    }, [sorting, priority, checked]);

    return (
        <>
            <div className='todo__filters'>
                <section className='filter'>
                    <div className='filter__header'>
                        <span>Фильтры</span>
                    </div>
                    <div className='filters-wrapper'>
                        <SelectInput
                            label='Сортировать'
                            options={[
                                ['ASC', 'По дате(возр.)'],
                                ['DESC', 'По дате(убыв.)'],
                            ]}
                            setter={setSorting}
                        />
                        <SelectInput
                            label='Важность'
                            options={[
                                ['ASC', 'Low -> Critical(возр.)'],
                                ['DESC', 'Critical -> Low(убыв.)'],
                            ]}
                            setter={setPriority}
                        />
                    </div>
                    <CustomSwitch initialValue={checked} setter={setChecked} />
                    <Button className='button' sx={{ width: 1 }} variant='outlined'>
                        Применить
                    </Button>
                </section>
            </div>
        </>
    );
};

export default Filters;
