import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarIcon } from '@mui/x-date-pickers';
import { DateUtils } from '../../utils';

interface DateParams {
    sx: object;
    date: string;
    setter: Function;
    label: string;
}

export default function DateSelect({ sx, date, setter, label = 'Дата подачи' }: DateParams) {
    const setNewDate = (e: any) => {
        let date = new Date(e).toLocaleDateString(e);
        console.log('1: ' + date);
        date = DateUtils.transformToJSON(date);
        console.log('2: ' + date);
        setter(date);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={date ? dayjs(date) : null}
                disablePast={true}
                sx={sx}
                onChange={(e) => setNewDate(e)}
                slots={{ openPickerIcon: () => <CalendarIcon sx={{ color: '#4b4b4b' }} /> }}
            />
        </LocalizationProvider>
    );
}
