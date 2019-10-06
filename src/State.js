import React from 'react';
import styled from 'styled-components';
import {string, shape} from 'prop-types';

const StyledRectangle = styled.div`
    border: 1px solid teal;
    border-radius: 1px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 200px;
    position: relative;
    width: 300px;
    .title-bar {
        border-bottom: 1px solid teal;
        background: green;
        padding: 0.5rem 1.2rem;

        h2 {
            color: white;
            margin: auto;
            text-transform: uppercase;
        }
    }
    .body {
    }
    .footer {
        display: grid;
        border-top: 1px solid teal;

        button {
            cursor: pointer;
            text-transform: uppercase;
            font-size: 1.2rem;
            border: 0;
            overflow: auto;
            :focus {
                outline: 0;
            }
        }
    }
    .separator {
        border: 1px solid teal;
        margin: 0.2rem 0;
    }
`;

const State = props => {
    const {
        view: {title, next},
        handleNext,
        handleBack
    } = props;

    return (
        <StyledRectangle>
            <div className="title-bar">
                <h2>{title}</h2>
            </div>
            <div className="body">This is some content</div>
            <div className="footer">
                <button onClick={handleBack}>Back</button>
                <div className="separator"></div>
                {next !== null &&
                    next.map(n => (
                        <button
                            key={n}
                            onClick={() => {
                                handleNext(n);
                            }}>
                            {n}
                        </button>
                    ))}
            </div>
        </StyledRectangle>
    );
};

State.propTypes = {
    view: shape({
        title: string.isRequired
    })
};

export default State;
