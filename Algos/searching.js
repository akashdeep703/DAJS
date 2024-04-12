
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    // BFS
    bredthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.value);

            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    // BFS Recursive
    bredthFirstSearchR(queue, list) {
        let currentNode = this.root;
        if (!queue.length) {
            return list;
        }
        currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.bredthFirstSearchR(queue, list);
    }
    // DFS Recursive
    DFSInOrder() {
        return traverseInOrder(this.root, []);
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, []);
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

//       9
//   4       20
// 1   6  15   170
// BFS
// [9, 4, 20, 1, 6, 15, 170]

// DFS
// InOrder [1, 4, 6, 9, 15, 20, 170]
// PreOrder [9, 4, 1, 6, 20, 15, 170]
// PostOrder [1, 6, 4, 15, 170, 20, 9]


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);
// const bfs = tree.bredthFirstSearch();
// const bfs = tree.bredthFirstSearchR([tree.root], []);
// console.log("🚀 ~ bfs:", bfs)
const dfsIn = tree.DFSInOrder();
console.log("🚀 ~ dfsIn:", dfsIn)
const dfsPost = tree.DFSPostOrder();
console.log("🚀 ~ dfsPost:", dfsPost)
const dfsPre = tree.DFSPreOrder();
console.log("🚀 ~ dfsPre:", dfsPre)