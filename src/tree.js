import Node from './tree-node';

class Tree {

    constructor(arr) {
        this.root = this.buildTree(arr, 0, arr.length - 1);
    }

    buildTree(arr, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const treeNode = new Node(arr[mid]);

        treeNode.left = this.buildTree(arr, start, mid - 1);
        treeNode.right = this.buildTree(arr, mid + 1, end);
        return treeNode;
    }

    insert(root, value) {
        let rootVar = root;
        if (rootVar === null) {
            rootVar = new Node(value);
            return rootVar;
        }

        if (value < rootVar.node) {
            rootVar.left = this.insert(rootVar.left, value);
        } else if (value > rootVar.node) {
            rootVar.right = this.insert(rootVar.right, value);
        }

        return rootVar;
    }

}

export default Tree;