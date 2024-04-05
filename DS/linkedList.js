// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // Code here
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    //
    remove(index) {
        // check params
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    //
    reverse() {
        // code here|
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
const test = myLinkedList.printList();
// console.log("🚀 ~ initial:", test)
const insert = myLinkedList.insert(3, 16);
// console.log("🚀 ~ insert:", insert)
const print = myLinkedList.printList();
// console.log("🚀 ~ print:", print)
const remove = myLinkedList.remove(1);
// console.log("🚀 ~ remove:", remove)
const reverse = myLinkedList.reverse();
// console.log("🚀 ~ reverse:", reverse)
