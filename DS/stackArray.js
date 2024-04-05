class Stack {
    constructor() {
        this.array = [];
    }

    pick() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value)
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
const test = myStack.push("gogo")
myStack.pick()
// myStack.pop("gogo")
console.log("🚀 ~ test:", test)


