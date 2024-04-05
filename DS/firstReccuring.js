// const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// return 2 
// const arr = [2, 1, 1, 3, 5, 1, 2, 4];
// return 1 
// const arr = [2, 3, 5, 4];
// undefined
function firstRecurringchar(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[j];
            }
        }
    }// O(n^2)
    return undefined
}
// using hash map
function firstRecurringchar2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }// O(n^2)
    return undefined
}
const test = firstRecurringchar([2, 3, 1, 3, 5, 1, 2, 4])
// console.log("🚀 ~ test:", test)
