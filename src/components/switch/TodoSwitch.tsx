import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import './index.scss';

const TodoSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,

    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#333333',
            '& + .MuiSwitch-track': {
                backgroundColor: '#fff',
                opacity: 1,
                border: 0,
                ...theme.applyStyles('dark', {
                    backgroundColor: '#2ECA45',
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.grey[100],
            ...theme.applyStyles('dark', {
                color: theme.palette.grey[600],
            }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
            ...theme.applyStyles('dark', {
                opacity: 0.3,
            }),
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        backgroundColor: '#E9E9EA',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#333333',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
        ...theme.applyStyles('dark', {
            backgroundColor: '#39393D',
        }),
    },
}));

interface CustomSwitchProps {
    label: string;
    initialValue: boolean;
    setter: any;
}

export default function CustomSwitch({ label, initialValue, setter }: CustomSwitchProps) {
    const handleChange = () => {
        setter((prev: boolean) => !prev);
    };

    return (
        <Stack
            direction='row'
            spacing={1}
            sx={{
                alignItems: 'start',
                width: 1,
                margin: '8px 0',
                padding: '0 8px',
                boxSizing: 'border-box',
            }}
        >
            <TodoSwitch value={initialValue} checked={initialValue} onChange={handleChange} />
            <Typography
                className={initialValue ? 'switch-label-text checked' : 'switch-label-text'}
            >
                {label}
            </Typography>
        </Stack>
    );
}
