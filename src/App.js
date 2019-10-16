import React from 'react';
import {createGlobalStyle} from 'styled-components';
import 'normalize.css';
import StateContainer from './StateContainer';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <StateContainer />
        </>
    );
}

export default App;
