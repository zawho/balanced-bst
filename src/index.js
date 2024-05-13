import sortAndReduce from './merge-sort';
import Tree from './tree';
import printTree from './print';

const testArr = sortAndReduce([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const testTree = new Tree(testArr);

// testTree.insert(10);
// testTree.insert(14);
// testTree.insert(39);
// testTree.insert(82);
// testTree.insert(700);
// testTree.find(67);
// testTree.find(10);
// testTree.find(0)
// testTree.delete(8);

// console.log(testTree.levelOrder());
// console.log(testTree.preOrder());

printTree(testTree.root);