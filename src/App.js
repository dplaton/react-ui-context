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

    return (
        <ContentWrapper>
            <GlobalStyle />

            {views.length > 0 &&
                views.map(view => (
                    <State key={view.id} view={view} addView={api.addView} />
                ))}
        </ContentWrapper>
    );
}

export default App;
