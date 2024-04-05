class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null;
        this.length = 0;
    }

    pick() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }


}

const myStack = new Stack();
const test1 = myStack.push('google');
const test2 = myStack.push('FB');
myStack.pick();
myStack.pop();
// myStack.pick();
// myStack.pop();
console.log("🚀 ~ test1:", test1)
console.log("🚀 ~ test2:", test2)


