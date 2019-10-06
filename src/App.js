import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {useUiContext} from './context/UiContext';

import State from './State';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif
    }
`;

function App() {
    const [currentView, api] = useUiContext();

    return (
        <div className="">
            <GlobalStyle />
            <State
                view={currentView}
                handleNext={() => {
                    api.setView('CREATE_ACCOUNT');
                }}
                handleBack={api.goBack}
            />
        </div>
    );
}

export default App;
