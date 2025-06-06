import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { observer } from 'mobx-react';
import { TextField } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';

import './styles.scss';
import DateSelect from '../date/DateSelect.tsx';
import SelectInput from '../select/index.tsx';
import { useInput } from '../../hooks/useInput.ts';
import todoViewModel from '../../store/TodoViewModel';
import CustomSwitch from '../switch/TodoSwitch.tsx';
import { DateUtils, Parser } from '../../utils.ts';

interface EditParams {
    isOpen: boolean;
    setter: any;
    id: string;
}

export const EditModal = observer(({ isOpen, setter, id }: EditParams) => {
    const [details, setDetails] = useState({
        title: '',
        text: '',
        priority: '',
        deadline_at: '',
        completed: false,
    });

    const title = useInput('', { minLength: 4 });
    const [text, setText] = useState<string | null>(null);
    const [priority, setPriority] = useState<string | null>(null);
    const [deadlineAt, setDeadline] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [completed, setCompleted] = useState<boolean>(false);

    const validateForm = async () => {
        return setIsValid(
            (!title.minLengthError && title.value.trim() !== '') ||
                completed !== null ||
                deadlineAt !== null,
        );
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const parsedData = Parser.parseTitle(title.value);
        await todoViewModel.editTodo(id, {
            title: cleanTitle(),
            text: text,
            priority: priority ?? parsedData.priority,
            deadline_at:
                DateUtils.transformDateToISO(deadlineAt ?? (parsedData.deadline || '')) || null,
            completed: completed,
        });
        handleClose();
    };

    const handleClose = () => {
        setter(false);
    };

    const cleanTitle = () => {
        return Parser.parseTitle(title.value.trim()).title;
    };

    useEffect(() => {
        validateForm();
    }, [title.value, completed, deadlineAt]);

    useEffect(() => {
        (async () => {
            setDetails(await todoViewModel.getTodo(id));
        })();
    }, []);

    useEffect(() => {
        title.setValue(details.title);
        setText(details.text);
        setPriority(details.priority);
        setCompleted(details.completed);
        setDeadline(details.deadline_at);
    }, [details]);

    return (
        <>
            <Dialog sx={{ height: 'auto' }} open={isOpen} onClose={handleClose} component={'span'}>
                <DialogTitle sx={{ color: '#fff', backgroundColor: '#222222', border: 'none' }}>
                    {'Редактирование задачи'}
                </DialogTitle>
                <DialogContent
                    sx={{
                        maxHeight: '800px',
                        height: '340px',
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
                                        : `Не хватает ${6 - title.value.length} символов`
                                }
                                value={title.value}
                                size='medium'
                                onChange={(e) => {
                                    title.onChange(e);
                                }}
                                error={title.value != '' && title.minLengthError}
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
                                    date={deadlineAt || ''}
                                    setter={setDeadline}
                                    label={'Дедлайн'}
                                />
                            </div>
                            <CustomSwitch
                                label='Выполнено'
                                initialValue={completed}
                                setter={setCompleted}
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
                    <Button
                        className='button'
                        type='submit'
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >
                        {'Изменить'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
