// Array.prototype.myFun = function (...elements) {
//     for (let element of elements) {
//         this[this.length] = element
//         console.log("🚀 ~ this:", this, this.length)
//     }
//     return this.length;
// };
// const arr = [9, 2, "test", 8, 10];
// arr.myFun('drive', 3, 5);


function reverse(items) {
    const newArray = [...items];
    let outArray = [];
    for (let i = newArray.length; i > 0; i--) {
        outArray.push(newArray[i - 1]);
    }
    const newStr = outArray.join(" ").trim(" ");
    // newStr.trim(" ");
 
    return newStr;
}

const out = reverse("KART is chutiya");
console.log("🚀 ~ out:", out)
