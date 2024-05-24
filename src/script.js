import sortAndReduce from './merge-sort';
import Tree from './tree';
import printTree from './print';

function getRandArr() {
    const arr = [];
    const arrLength =  Math.floor((Math.random() * (15 - 5)) + 6);

    for (let i = 0; i < arrLength; i++) {
        const randNum = Math.floor((Math.random() * 100) + 1);
        arr.push(randNum);
    }

    return arr;
}

function logBalance(treeVar) {
    printTree(treeVar.root);

    if (treeVar.isBalanced()) {
        console.log('This tree is balanced.');
    } else {
        console.log('This tree is unbalanced.');
    }
}

function printOrders(treeVar) {
    console.log(`Level order: ${treeVar.levelOrder()}`);
    console.log(`Pre order: ${treeVar.preOrder()}`);
    console.log(`Post order: ${treeVar.postOrder()}`);
    console.log(`In order: ${treeVar.inOrder()}`);
}

function insertBigNums(treeVar) {
    const numOfInserts = Math.floor((Math.random() * (10 - 5)) + 6);

    for (let i = 0; i < numOfInserts; i++) {
        const randNum = Math.floor((Math.random() * (1000 - 100)) + 101);
        treeVar.insert(randNum);
    }
}

function runScript() {
    const arr = getRandArr();
    const sortedArr = sortAndReduce(arr);
    const newTree = new Tree(sortedArr);
    
    logBalance(newTree);
    printOrders(newTree);

    insertBigNums(newTree);
    logBalance(newTree);
    
    newTree.rebalance();
    logBalance(newTree);
    printOrders(newTree);
}

export default runScript;