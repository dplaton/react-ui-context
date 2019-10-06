import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UiContextProvider from './context/UiContext';

import * as serviceWorker from './serviceWorker';

const initialViews = [
    {
        id: 'SIGN_IN',
        title: 'Sign in',
        parent: null
    },
    {
        id: 'MY_ACCOUNT',
        title: 'My Account',
        parent: 'SIGN_IN'
    },
    {
        id: 'CREATE_ACCOUNT',
        title: 'Create Account',
        parent: 'SIGN_IN'
    }
];

ReactDOM.render(
    <UiContextProvider initialViews={initialViews}>
        <App />
    </UiContextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
