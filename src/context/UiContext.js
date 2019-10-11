import React, {useContext, useState} from 'react';
import uuid from 'uuid/v1';
const UiContext = React.createContext();

const initialView = {
    title: 'Initial',
    parent: null
};

const UiContextProvider = ({initialViews = [], children}) => {
    const [currentView, setCurrentView] = useState(
        initialViews[0] || initialView
    );
    const [views, updateViews] = useState(initialViews);

    const addView = view => {
        if (view.title && view.parent) {
            updateViews([...views, {...view, id: uuid()}]);
        }
    };

    const goBack = () => {
        if (currentView.parent === null) {
            return;
        }
        const nextView = views.find(v => v.id === currentView.parent);
        if (nextView) {
            setCurrentView(nextView);
        }
    };

    const setView = viewId => {
        const view = views.find(v => v.id === viewId);
        if (view) {
            setCurrentView(view);
        }
    };

    const contextValue = [
        {currentView, views},
        {
            setView,
            addView,
            goBack
        }
    ];

    return (
        <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
    );
};

export default UiContextProvider;

export const useUiContext = () => useContext(UiContext);
