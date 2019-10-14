import Tree, {TreeNode} from '../Tree';
import uuid from 'uuid/v1';

describe('Tree', () => {
    it('traverses a tree in preorder', () => {
        let result = '';
        const fn = node => (result += node.title);

        const rootId = uuid();
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
                id: uuid(),
                title: 'F'
            })
        );
        dNode.addChild(
            new TreeNode({
                id: uuid(),
                title: 'G'
            })
        );

        tree.preorderTraversal(fn);

        console.log(result);
        expect(result).toEqual('ABCEFDG');
    });
});
