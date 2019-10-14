import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import UiContextProvider, {useUiContext} from '../UiContext';

const sampleViews = [
    {
        id: 'VIEW_1',
        title: 'View One',
        parent: null,
        next: ['VIEW_20', 'VIEW_21']
    },
    {
        id: 'VIEW_20',
        title: 'View 20',
        parent: 'VIEW_1',
        next: ['VIEW_30']
    },
    {
        id: 'VIEW_21',
        parent: 'VIEW_1',
        title: 'View 21',
        next: []
    },
    {
        id: 'VIEW_30',
        parent: 'VIEW_20',
        title: 'View 30',
        next: []
    }
];

describe('UIContext', () => {
    it('initializes with the correct view', () => {
        const TestComponent = () => {
            const [{currentView}] = useUiContext();
            const content = (
                <div>
                    <h2 aria-label="title">{currentView.title}</h2>
                </div>
            );

            return content;
        };
        const {getByLabelText} = render(
            <UiContextProvider initialViews={sampleViews}>
                <TestComponent />
            </UiContextProvider>
        );
        expect(getByLabelText('title').textContent).toEqual('View One');
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
            <UiContextProvider initialViews={sampleViews}>
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
            <UiContextProvider initialViews={sampleViews}>
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
