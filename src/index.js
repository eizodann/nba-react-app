import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';

const App =()=> {
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));