import { Button } from '@mui/material';
import SelectInput from '../select';
import './styles.scss';

const Filters = () => {
    return (
        <>
            <div className='todo__filters'>
                <section className='filter'>
                    <div className='filter__header'>
                        <span>Фильтры</span>
                    </div>
                    <div className='filters-wrapper'>
                        <SelectInput label='Задачи' options={[]} />
                        <SelectInput label='Сортировать' options={[]} />
                    </div>
                    <Button className='button' sx={{ width: 1 }} variant='outlined'>
                        Применить
                    </Button>
                </section>
            </div>
        </>
    );
};

export default Filters;
