import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './styles.scss';

interface SelectProps {
    label: string;
    options: Array<any>;
    value: any;
    setter: any;
}

export default function SelectInput({ label, value, options, setter }: SelectProps) {
    const handleChange = (event: SelectChangeEvent) => {
        setter(event.target.value);
    };

    return (
        <FormControl
            className='custom-select'
            sx={{ width: 1, color: '#fff' }}
            size={'medium'}
            component={'span'}
        >
            <InputLabel id='demo-select-small-label'>{label}</InputLabel>
            <Select
                labelId='demo-select-small-label'
                value={value}
                label={label}
                onChange={handleChange}
                sx={{ color: '#fff' }}
            >
                {options.map((item, index) => (
                    <MenuItem key={index} value={item[0]}>
                        {item[1]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
