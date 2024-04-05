// a function that call itself
let counter = 0;

function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}
// const rec = inception();
// console.log(rec);

// factorial
function findFactorialRecursive(number) {
    if (number === 1) {
        return 1;
    }
    console.log(number);
    return number * findFactorialRecursive(number - 1);
}
// 
function findFactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer
}
// const fact = findFactorialRecursive(7);
// console.log("🚀 ~ fact:", fact)

// Fibonacci Sequence

//Given number N return the index value of the Fibonacci sequence, where the sequence is: 

// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of sequnce is each value is the sum of previous 2 values, that means that for N=5 -> 2+3

function fibonacciIterative(n) {// O(n-2)
    //code here 
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

function fibonacciRecursive(n) {// O(2^n)
    if (n < 2) {
        return n;
    }
    //code here 
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

const fib = fibonacciIterative(40);
console.log("🚀 ~ fib:", fib)
// const fib = fibonacciRecursive(46);
// console.log("🚀 ~ fib:", fib)



