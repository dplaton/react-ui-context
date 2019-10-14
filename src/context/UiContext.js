import React, {useContext, useState} from 'react';
import uuid from 'uuid/v1';

import Tree, {TreeNode} from './Tree';
const UiContext = React.createContext();

const initialView = {
    title: 'Initial',
    parent: null
};

const viewsTree = new Tree(new TreeNode({id: uuid(), title: 'Home'}));

const UiContextProvider = ({initialViews = [], children}) => {
    const [currentView, setCurrentView] = useState(
        initialViews[0] || initialView
    );

    const readTree = tree => {
        let list = [];
        const fn = node => {
            list.push(node);
        };
        tree.preorderTraversal(fn);

        return list;
    };

    const [views, updateViews] = useState(readTree(viewsTree));

    const addView = view => {
        console.log(`Adding `, view);
        const parentNode = viewsTree.findById(view.parent);
        if (!parentNode) {
            console.error(`Parent node with id ${view.parent} not found`);
        }
        parentNode.addChild(
            new TreeNode({
                id: uuid(),
                title: view.title
            })
        );

        updateViews(readTree(viewsTree));
    };

    const setView = viewId => {
        const view = viewsTree.findById(viewId);
        if (view) {
            setCurrentView(view);
        }
    };

    const contextValue = [
        {currentView, views},
        {
            setView,
            addView
        }
    ];

    return (
        <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
    );
};

export default UiContextProvider;

export const useUiContext = () => useContext(UiContext);
