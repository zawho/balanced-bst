import sortAndReduce from './merge-sort';
import Tree from './tree';
import printTree from './print';

const testArr = sortAndReduce([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const testTree = new Tree(testArr);

// testTree.insert(2);
// testTree.insert(10);
// testTree.insert(50);
// testTree.insert(700);
// testTree.find(67);
// testTree.find(50);
// testTree.find(11);
// testTree.find(0);

printTree(testTree.root);