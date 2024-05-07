import Node from './tree-node';

function findNextBiggest(deletedNode) {
    let currentNode = deletedNode.right;

    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    console.log(currentNode);
    return currentNode;
}

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

    insertRecursion(root, value) {

        let rootVar = root;

        if (rootVar === null) {
            rootVar = new Node(value);
            return rootVar;
        }

        if (value < rootVar.node) {
            rootVar.left = this.insertRecursion(rootVar.left, value);
        } else if (value > rootVar.node) {
            rootVar.right = this.insertRecursion(rootVar.right, value);
        }

        return rootVar;
    }

    findRecursion(root, value) {

        const rootVar = root;

        if (rootVar.node === value) {
            console.log(rootVar);
            return rootVar;
        } 

        if (rootVar.node !== value && rootVar.left === null && rootVar.right === null ||
            value < rootVar.node && rootVar.left === null || 
        value > rootVar.node && rootVar.right === null ) {
            console.log(`This tree does not contain ${value}.`);
            return null;
        }

        if (typeof value !== 'number') {
            console.log(`Please enter a number.`);
            return null;
        }

        if (value < rootVar.node) {
            return this.findRecursion(rootVar.left, value);
        } 
        return this.findRecursion(rootVar.right, value);
    }

    deleteRecursion(root, value) {
        const rootVar = root;

        if (rootVar === null) {
            return rootVar;
        }

        if (value < rootVar.node) {
            rootVar.left = this.deleteRecursion(root.left, value);
        } else if (value > rootVar.node) {
            rootVar.right = this.deleteRecursion(root.right, value);
        } else if (rootVar.left === null) {
            return rootVar.right;
        } else if (rootVar.right === null) {
            return rootVar.left;
        }
        // Later: Try to really understand wtf i did up there^

        if (rootVar.node === value && rootVar.left !== null && rootVar.right !== null) {
            const replaceNode = findNextBiggest(rootVar);
            replaceNode.left = rootVar.left;
            return replaceNode;
        }
        
        return rootVar;
    }

    insert(value) {
        this.insertRecursion(this.root, value);
    }

    find(value) {
        return this.findRecursion(this.root, value);
    }

    delete(value) {
        this.deleteRecursion(this.root, value);
    }

}

export default Tree;