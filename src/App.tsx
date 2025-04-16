import 'styles/index.scss';
import Main from './pages/Main';
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <>
            <Main />
            <ToastContainer limit={2} />
        </>
    );
}

export default App;
