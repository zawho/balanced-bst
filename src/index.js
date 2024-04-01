import sortAndReduce from './merge-sort';
import Tree from './tree';
import printTree from './print';

const testArr = sortAndReduce([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const testTree = new Tree(testArr);

testTree.insert(testTree.root, 2);
testTree.insert(testTree.root, 10);
testTree.insert(testTree.root, 50);
testTree.insert(testTree.root, 700);

printTree(testTree.root);