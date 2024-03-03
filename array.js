class NewArray {
    constructor() {
        this.length = 0
        this.data = {};
    }
    // get array items with index
    get(index) {
        return this.data[index];
    }
    // push array items
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    // pop array items
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    // delete array items at specific position
    delete(index) {
        const lastItem = this.data[index];
        this.shiftitems(index);
        return lastItem;
    }
    // 
    shiftitems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const newArray = new NewArray();
newArray.push(1);
newArray.push('is');
newArray.push('me');
// newArray.pop();
// newArray.delete(1);
// newArray.get(0);
console.log("🚀 ~ newArray:", newArray)

