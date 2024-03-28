import Tree from './tree';
import printTree from './print';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testTree = new Tree(testArr);

printTree(testTree.root);