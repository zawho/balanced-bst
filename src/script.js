import sortAndReduce from './merge-sort';
import Tree from './tree';
import printTree from './print';

function getRandArr() {
    const arr = [];
    const arrLength =  Math.floor((Math.random() * (20 - 10)) + 11);

    for (let i = 0; i < arrLength; i++) {
        const randNum = Math.floor((Math.random() * 100) + 1);
        arr.push(randNum);
    }

    return arr;
}

function runScript() {
    const arr = getRandArr();
    const sortedArr = sortAndReduce(arr);
    const newTree = new Tree(sortedArr);

    printTree(newTree.root);

    if (newTree.isBalanced) {
        console.log('This tree is balanced.');
    }
}

export default runScript;