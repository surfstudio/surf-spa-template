import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './providers/router';

import './styles/index.scss';

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
