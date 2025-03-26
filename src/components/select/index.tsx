import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function SelectSmall() {
    const [todoStatus, setStatus] = useState('all');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small-label'>Задачи</InputLabel>
            <Select
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={todoStatus}
                label='Задачи'
                onChange={handleChange}
            >
                <MenuItem value={'all'}>{'Показать все'}</MenuItem>
                <MenuItem value={'completed'}>{'Выполненные'}</MenuItem>
                <MenuItem value={'active'}>{'Активные'}</MenuItem>
            </Select>
        </FormControl>
    );
}
