import React, {useContext, useState, useEffect} from 'react';
import uuid from 'uuid/v1';

import Tree, {TreeNode, createFromObject} from './Tree';
const UiContext = React.createContext();

const initialView = {
    title: 'Initial',
    parent: null
};

const readTree = tree => {
    let list = [];
    const fn = node => {
        list.push(node);
    };
    tree.preorderTraversal(fn);

    return list;
};

const UiContextProvider = ({initialViews = undefined, children}) => {
    const [viewTree, setViewTree] = useState(undefined);
    const [currentView, setCurrentView] = useState(undefined);
    const [views, updateViews] = useState([]);

    useEffect(() => {
        const viewsTree = initialViews
            ? createFromObject(initialViews)
            : new Tree(new TreeNode({id: uuid(), title: 'Home'}));
        setViewTree(viewsTree);
    }, []);

    useEffect(() => {
        if (viewTree) {
            updateViews(readTree(viewTree));
            setCurrentView(viewTree.root);
        }
    }, [viewTree]);

    const addView = view => {
        console.log(`Adding `, view);
        const parentNode = viewTree.findById(view.parent);
        if (!parentNode) {
            console.error(`Parent node with id ${view.parent} not found`);
        }
        parentNode.addChild(
            new TreeNode({
                id: uuid(),
                title: view.title
            })
        );

        updateViews(readTree(viewTree));
    };

    const setView = viewId => {
        const view = viewTree.findById(viewId);
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
