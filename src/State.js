import React from 'react';
import styled from 'styled-components';
import {string, shape, func} from 'prop-types';

const StyledRectangle = styled.div`
    border: 1px solid teal;
    border-radius: 1px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100px;
    max-width: 200px;
    position: relative;
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
        padding: 0.5rem 1.2rem;
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
        view: {id, title},
        addView
    } = props;

    const handleAddView = () => {
        addView({
            parent: id,
            title: `Son of ${title}`
        });
    };

    return (
        <StyledRectangle aria-label={`state-${id}`}>
            <div className="title-bar">
                <h2>{title}</h2>
            </div>
            <div className="body">{`This is some content, id is ${id}`}</div>
            <div className="footer">
                <button onClick={handleAddView}>Add</button>
            </div>
        </StyledRectangle>
    );
};

State.propTypes = {
    view: shape({
        title: string.isRequired
    }),
    addView: func.isRequired
};

export default State;
