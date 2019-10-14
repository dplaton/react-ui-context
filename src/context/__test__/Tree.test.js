import Tree, {TreeNode} from '../Tree';
import uuid from 'uuid/v1';

const rootId = uuid();
const fId = uuid();

const root = new TreeNode({
    id: rootId,
    title: 'A'
});

const generateTree = () => {
    const tree = new Tree(root);

    tree.root.addChild(
        new TreeNode({
            id: uuid(),
            title: 'B'
        })
    );
    const cId = uuid();
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
            id: uuid(),
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
});
