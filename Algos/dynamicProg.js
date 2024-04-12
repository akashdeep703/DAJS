// memoization -- save memory
// use cache technique
function addTo80(n) {
    console.log('long time');
    return n + 80;
}
// addTo80(5);
// addTo80(5);
// initialise a cache object
// let cache = {
//     5: 85
// };
// let cache = {};

function memoizedAddto80(n) {
    let cache = {};
    return function (n) { // closer function
        if (n in cache) { // catch.n
            return cache[n];
        } else {
            console.log('long time');
            // cache[n] = 5 + 80;
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddto80();
console.log('1', memoized(6));
console.log('2', memoized(6));

// console.log('1', memoizedAddto80(6));
// console.log('2', memoizedAddto80(6));

//dynamic fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

let calculations = 0;

function fibonacci(n) { // O(2^n)
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// optimised with DP
function fibonacciMaster() { // O(n)
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(30));
console.log('DP', fasterFib(100));
console.log('we did ' + calculations + ' calculations');