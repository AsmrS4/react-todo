import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import todoViewModel from '../../store/TodoViewModel';
import { observer } from 'mobx-react';
import { TextField } from '@mui/material';
import { useInput } from '../../hooks/useInput.ts';
import { useState } from 'react';
import SelectInput from '../select/index.tsx';

import './styles.scss';

export const CreateModal = observer(() => {
    const title = useInput('', { minLength: 6 });
    const [text, setText] = useState('');
    const [priority, setPriority] = useState(1);
    const [deadlineAt, setDeadline] = useState(null);

    const handleClickOpen = () => {};
    const handleClose = () => {
        todoViewModel.closeModal();
    };

    return (
        <>
            <Dialog open={todoViewModel.isOpen} onClose={handleClose} component={'span'}>
                <DialogTitle sx={{ color: '#fff', backgroundColor: '#222222', border: 'none' }}>
                    {'Новая задача'}
                </DialogTitle>
                <DialogContent
                    sx={{
                        maxHeight: '500px',
                        height: '240px',
                        width: '600px',
                        boxSizing: 'border-box',
                        backgroundColor: '#222222',
                    }}
                >
                    <DialogContentText>
                        <form className='modal-form' action=''>
                            <TextField
                                sx={{ width: 1, color: '#fff' }}
                                label={
                                    !title.minLengthError || title.value === ''
                                        ? 'Название'
                                        : `Не хватает ${6 - title.value.length} символов`
                                }
                                value={title.value}
                                size='medium'
                                onChange={(e) => {
                                    title.onChange(e);
                                }}
                                error={title.value != '' && title.minLengthError}
                            />
                            <SelectInput label={'Приоритет'} options={[]} />
                            <TextField
                                label={'Описание'}
                                sx={{ width: 1 }}
                                value={text}
                                size='medium'
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        color: '#fff',
                        backgroundColor: '#222222',
                        border: 'none',
                        padding: '0 20px 20px 20px',
                    }}
                >
                    <Button className='button' onClick={handleClose}>
                        {'Отмена'}
                    </Button>
                    <Button className='button' onClick={handleClose}>
                        {'Создать'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
