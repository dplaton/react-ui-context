import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';

import UiContextProvider, {useUiContext} from '../UiContext';

import sampleTree from './sample-tree';

describe('UIContext', () => {
    it('initializes with the correct view', async () => {
        const TestComponent = () => {
            const [{currentView}] = useUiContext();
            const content = currentView ? (
                <h2 aria-label="title">{currentView.title}</h2>
            ) : null;

            return <div>{content}</div>;
        };
        const {getByLabelText} = render(
            <UiContextProvider initialViews={sampleTree}>
                <TestComponent />
            </UiContextProvider>
        );

        const node = await waitForElement(() => getByLabelText('title'));

        expect(node.textContent).toEqual('A');
    });

    xit('moves to the next view', async () => {
        const TestComponent = () => {
            const [{currentView}, api] = useUiContext();
            const content = (
                <div>
                    <h2 aria-label="title">{currentView.title}</h2>
                    <button
                        onClick={() => {
                            api.setView('VIEW_20');
                        }}>
                        Next
                    </button>
                </div>
            );
            return content;
        };

        const {getByLabelText, getByRole} = render(
            <UiContextProvider initialViews={sampleTree}>
                <TestComponent />
            </UiContextProvider>
        );

        expect(getByLabelText('title').textContent).toEqual('View One');
        fireEvent.click(getByRole('button'));

        expect(getByLabelText('title').textContent).toEqual('View 20');
    });

    xit('goes back to the previous view', () => {
        const TestComponent = () => {
            const [{currentView}, api] = useUiContext();
            const content = (
                <div>
                    <h2 aria-label="title">{currentView.title}</h2>
                    <button
                        onClick={() => {
                            api.setView('VIEW_20');
                        }}>
                        Next
                    </button>
                    <button onClick={api.goBack}>Back</button>
                </div>
            );
            return content;
        };

        const {getByLabelText, getByText} = render(
            <UiContextProvider initialViews={sampleTree}>
                <TestComponent />
            </UiContextProvider>
        );

        expect(getByLabelText('title').textContent).toEqual('View One');

        fireEvent.click(getByText('Next'));
        expect(getByLabelText('title').textContent).toEqual('View 20');

        fireEvent.click(getByText('Back'));
        expect(getByLabelText('title').textContent).toEqual('View One');
    });
});
