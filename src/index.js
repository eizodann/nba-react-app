import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.jsx';
import { firebase } from './firebase.jsx';

const App =(props)=> {
    return (
        <BrowserRouter>
            <Routes {...props}></Routes>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=> {
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})
