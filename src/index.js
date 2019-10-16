import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v1';

import App from './App';
import UiContextProvider from './context/UiContext';

import * as serviceWorker from './serviceWorker';

const sampleTree = {
    tree: {
        id: uuid(),
        title: 'A',
        children: [
            {
                id: uuid(),
                title: 'B'
            },
            {
                id: uuid(),
                title: 'C',
                children: [
                    {
                        id: uuid(),
                        title: 'E'
                    },
                    {
                        id: uuid(),
                        title: 'F'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'D',
                children: [
                    {
                        id: uuid(),
                        title: 'G'
                    }
                ]
            }
        ]
    }
};

ReactDOM.render(
    <UiContextProvider initialViews={sampleTree}>
        <App />
    </UiContextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
