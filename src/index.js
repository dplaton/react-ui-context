import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UiContextProvider from './context/UiContext';

import * as serviceWorker from './serviceWorker';

const initialViews = [
    {
        id: 'SIGN_IN',
        title: 'Sign in',
        parent: null,
        next: ['MY_ACCOUNT', 'CREATE_ACCOUNT']
    },
    {
        id: 'MY_ACCOUNT',
        title: 'My Account',
        parent: 'SIGN_IN',
        next: []
    },
    {
        id: 'CREATE_ACCOUNT',
        title: 'Create Account',
        parent: 'SIGN_IN',
        next: ['MY_ACCOUNT']
    }
];

ReactDOM.render(
    <UiContextProvider>
        <App />
    </UiContextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
