import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './styles.scss';

interface SelectProps {
    label: string;
    options: Array<any>;
}

export default function SelectInput({ label, options }: SelectProps) {
    const [todoStatus, setStatus] = useState('all');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    return (
        <FormControl
            className='custom-select'
            sx={{ width: 1, color: '#fff' }}
            size='small'
            component={'span'}
        >
            <InputLabel id='demo-select-small-label'>{label}</InputLabel>
            <Select
                labelId='demo-select-small-label'
                value={todoStatus}
                label={label}
                onChange={handleChange}
                sx={{ color: '#fff' }}
            >
                <MenuItem value={'all'}>{'Показать все'}</MenuItem>
                <MenuItem value={'completed'}>{'Выполненные'}</MenuItem>
                <MenuItem value={'active'}>{'Активные'}</MenuItem>
            </Select>
        </FormControl>
    );
}
