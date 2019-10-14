import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {useUiContext} from './context/UiContext';

import State from './State';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

function App() {
    const [{views}, api] = useUiContext();

    let level = 0;
    return (
        <ContentWrapper>
            <GlobalStyle />

            {views.map(item => (
                <State key={item.id} view={item} addView={api.addView} />
            ))}
        </ContentWrapper>
    );
}

export default App;
