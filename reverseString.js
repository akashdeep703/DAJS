//
class MyString {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    reverse(items) {
        const newArray = [...items];
        let outArray = [];
        for (let i = newArray.length; i > 0; i--) {
            outArray.push(newArray[i -1]);
        }
        this.data = outArray.join(" ");
        return this.data;
    }
}
const newStr = new MyString();

newStr.reverse("KARTIK");
console.log("🚀 ~ newStr:", newStr)



