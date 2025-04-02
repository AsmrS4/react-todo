import './styles.scss';

const TodoHeader = () => {
    return (
        <>
            <section className='todo__header'>
                <div className='header'>
                    <h1 className='header__title'>Список задач</h1>
                </div>
                <div className='progress-bar'></div>
            </section>
        </>
    );
};

export default TodoHeader;
