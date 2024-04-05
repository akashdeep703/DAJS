// reverse the string
function reverse(items) {
    let outArray = [];
    for (let i = items.length - 1; i >= 0; i--) {
        outArray.push(items[i]);
    }
    return outArray.join("");
}
function reverse2(str) {
    return str.split('').reverse().join('');
}
const reverse3 = str => [...str].reverse().join('');
console.log(reverse("This is me"));
