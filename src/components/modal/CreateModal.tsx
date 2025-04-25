import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { observer } from 'mobx-react';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import './styles.scss';
import todoViewModel from '../../store/TodoViewModel';
import { useInput } from '../../hooks/useInput.ts';
import { DateUtils, Parser } from '../../utils.ts';
import SelectInput from '../select/index.tsx';
import DateSelect from '../date/DateSelect.tsx';

export const CreateModal = observer(() => {
    const title = useInput('', { minLength: 4 });
    const [text, setText] = useState<string | null>(null);
    const [priority, setPriority] = useState<string | null>(null);
    const [deadlineAt, setDeadline] = useState<string | null>(null);
    const [isValid, setIsValid] = useState(false);

    const validateForm = async () => {
        return setIsValid(!title.minLengthError && title.value !== '');
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const parsedData = Parser.parseTitle(title.value);
        console.log({
            title: cleanTitle(),
            text: text,
            priority: (priority ?? parsedData.priority) || '3',
            deadline:
                DateUtils.transformDateToISO(deadlineAt ?? (parsedData.deadline || '')) || null,
        });
        await todoViewModel.addTodo({
            title: cleanTitle(),
            text: text,
            priority: priority ?? parsedData.priority,
            deadline:
                DateUtils.transformDateToISO(deadlineAt ?? (parsedData.deadline || '')) || null,
        });

        handleClose();
    };

    const handleClose = () => {
        title.setValue('');
        setDeadline(null);
        setPriority(null);
        setText('');
        todoViewModel.closeModal();
    };

    useEffect(() => {
        validateForm();
    }, [title.minLengthError]);

    const cleanTitle = () => {
        return Parser.parseTitle(title.value.trim()).title;
    };

    return (
        <>
            <Dialog open={todoViewModel.isOpen} onClose={handleClose} component={'span'}>
                <DialogTitle sx={{ color: '#fff', backgroundColor: '#222222', border: 'none' }}>
                    {'Новая задача'}
                </DialogTitle>
                <DialogContent
                    sx={{
                        height: 'auto',
                        width: '600px',
                        boxSizing: 'border-box',
                        backgroundColor: '#222222',
                    }}
                >
                    <DialogContentText>
                        <form className='modal-form' action='' onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: 1, color: '#fff' }}
                                label={
                                    !title.minLengthError || title.value === ''
                                        ? 'Название'
                                        : `Не хватает ${4 - title.value.length} символов`
                                }
                                value={title.value}
                                size='medium'
                                onChange={(e) => title.onChange(e)}
                                error={title.isEmpty}
                            />
                            <TextField
                                label={'Описание'}
                                sx={{ width: 1 }}
                                value={text}
                                size='medium'
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            />
                            <div className='row-wrapper'>
                                <SelectInput
                                    label={'Приоритет'}
                                    value={priority}
                                    options={[
                                        ['4', 'Низкий(Low)'],
                                        ['3', 'Средний(Medium)'],
                                        ['2', 'Высокий(High)'],
                                        ['1', 'Критический(Critical)'],
                                    ]}
                                    setter={setPriority}
                                />
                                <DateSelect
                                    sx={{ marginX: '0', width: '100%' }}
                                    date={deadlineAt?.toString() || ''}
                                    setter={setDeadline}
                                    label={'Дедлайн'}
                                />
                            </div>
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
                    <Button
                        className='button'
                        type='submit'
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >
                        {'Создать'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
