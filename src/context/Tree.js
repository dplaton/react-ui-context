class Tree {
    constructor(root) {
        if (!root) {
            root = new TreeNode();
        }
        this.root = root;
    }

    /**
     * Traverses the tree breadth-first and applies the callback function to the node
     * @param {Function} fn
     */
    preorderTraversal(fn) {
        if (!fn || typeof fn !== 'function') {
            fn = console.log;
        }

        fn(this.root);
        this._visitPreorder(this.root, fn);
    }

    _visitPreorder(startingNode, fn) {
        // visit the root node
        if (startingNode.children.length === 0) {
            return;
        }
        startingNode.children.forEach(kid => {
            fn(kid);
            this._visitPreorder(kid, fn);
        });
    }
}

class TreeNode {
    constructor({title, parent}) {
        this.title = title;
        this.parent = parent;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

export default Tree;
export {TreeNode};
