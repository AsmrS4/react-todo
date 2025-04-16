import { Button } from '@mui/material';
import SelectInput from '../select';
import './styles.scss';
import CustomSwitch from '../switch/TodoSwitch';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import todoViewModel from '../../store/TodoViewModel';

const Filters = () => {
    const [sorting, setSorting] = useState('');
    const [priority, setPriority] = useState('');
    const [checked, setChecked] = useState(false);
    const handlePass = () => {
        todoViewModel.setQueryParams({});
        setChecked(false);
        setPriority('');
        setSorting('');
    };
    const handleApply = () => {
        todoViewModel.setQueryParams({
            sorting: sorting || null,
            priority: priority || null,
            completed: checked ? false : null,
        });
    };

    useEffect(() => {
        handleApply();
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
                            value={sorting}
                            options={[
                                ['ASC_D', 'По дате(возр.)'],
                                ['DESC_D', 'По дате(убыв.)'],
                                ['DESC_P', 'По важности(возр.)'],
                                ['ASC_P', 'По важности(убыв.)'],
                            ]}
                            setter={setSorting}
                        />
                        <SelectInput
                            label='Приоритет'
                            value={priority}
                            options={[
                                ['4', 'Низкий'],
                                ['3', 'Средний'],
                                ['2', 'Высокий'],
                                ['1', 'Критический'],
                            ]}
                            setter={setPriority}
                        />
                    </div>
                    <CustomSwitch
                        label={'Показать невыполненные'}
                        initialValue={checked}
                        setter={setChecked}
                    />
                    <div className='buttons-wrapper'>
                        <Button
                            className='button'
                            sx={{ width: 1 }}
                            variant='outlined'
                            onClick={handlePass}
                        >
                            Сбросить
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default observer(Filters);
