import React from 'react';
import styled from 'styled-components';

import {useUiContext} from './context/UiContext';
import State from './State';

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const StateContainer = () => {
    const [{views}, api] = useUiContext();

    return (
        <ContentWrapper>
            {views &&
                views.map(view => (
                    <State key={view.id} view={view} addView={api.addView} />
                ))}
        </ContentWrapper>
    );
};

export default StateContainer;
