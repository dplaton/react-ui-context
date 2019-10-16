import Tree, {TreeNode, createFromObject} from '../Tree';
import uuid from 'uuid/v1';
import sampleTree from './sample-tree';

const rootId = uuid();
const fId = uuid();
const cId = uuid();
const eId = uuid();

const generateTree = () => {
    const root = new TreeNode({
        id: rootId,
        title: 'A'
    });
    const tree = new Tree(root);

    tree.root.addChild(
        new TreeNode({
            id: uuid(),
            title: 'B'
        })
    );

    const cNode = new TreeNode({
        id: cId,
        title: 'C'
    });

    tree.root.addChild(cNode);

    const dNode = new TreeNode({
        id: uuid(),
        title: 'D'
    });
    tree.root.addChild(dNode);

    cNode.addChild(
        new TreeNode({
            id: eId,
            title: 'E'
        })
    );
    cNode.addChild(
        new TreeNode({
            id: fId,
            title: 'F'
        })
    );

    dNode.addChild(
        new TreeNode({
            id: uuid(),
            title: 'G'
        })
    );

    return tree;
};
describe('Tree', () => {
    it('traverses a tree in preorder', () => {
        const tree = generateTree();
        let result = '';
        const fn = node => (result += node.title);

        tree.preorderTraversal(fn);

        console.log(result);
        expect(result).toEqual('ABCEFDG');
    });
    it('finds an element by id', () => {
        const tree = generateTree();
        let element = tree.findById(rootId);

        expect(element).not.toBeUndefined();
        expect(element.title).toEqual('A');

        element = tree.findById(fId);
        expect(element).not.toBeUndefined();
        expect(element.title).toEqual('F');
    });
    it('adds a child node to the root element', () => {
        const tree = generateTree();
        const expectedResult = 'ABCEFDGH';
        let result = '';
        const fn = node => (result += node.title);
        let rootNode = tree.findById(rootId);
        rootNode.addChild(
            new TreeNode({
                id: uuid(),
                title: 'H'
            })
        );
        tree.preorderTraversal(fn);

        expect(result).toEqual(expectedResult);
    });

    it('adds a child node to an element', () => {
        const tree = generateTree();
        const expectedResult = 'ABCEFHDG';
        let result = '';
        const fn = node => (result += node.title);

        let cNode = tree.findById(cId);
        cNode.addChild(new TreeNode({id: uuid(), title: 'H'}));

        tree.preorderTraversal(fn);
        expect(result).toEqual(expectedResult);
    });

    it('adds a child node to a leaf element', () => {
        const tree = generateTree();
        const expectedResult = 'ABCEHFDG';
        let result = '';
        const fn = node => (result += node.title);

        let eNode = tree.findById(eId);
        eNode.addChild(new TreeNode({id: uuid(), title: 'H'}));

        tree.preorderTraversal(fn);
        expect(result).toEqual(expectedResult);
    });
    it('creates a tree from a JS object', () => {
        const tree = createFromObject(sampleTree);

        let result = '';
        const fn = node => (result += node.title);

        tree.preorderTraversal(fn);

        console.log(result);
        expect(result).toEqual('ABCEFDG');
    });
});
