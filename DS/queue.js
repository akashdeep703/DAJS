class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null;
        this.length = 0;
    }

    pick() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
const test1 = myQueue.enqueue('google');
const test2 = myQueue.enqueue('FB');
myQueue.pick();
myQueue.dequeue();
// myQueue.dequeue();
console.log("🚀 ~ test1:", test1)
console.log("🚀 ~ test2:", test2)

// implement queue using stack
// https://leetcode.com/problems/implement-queue-using-stacks/description/
// https://replit.com/@aneagoie/Data-Structures-Queues-2-stacks#index.js
