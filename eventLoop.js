// const one = () => {
//     const two = () => {
//         console.log('3')
//     }
//     two();
// }
// one();
// In Stack
// console.log('3')
// two()
// one

// Recursion
// function foo(){
//     console.log('5');
//     // foo();
// }
// foo();
//RangeError: Maximum call stack size exceeded

// call stack
console.log('1'); // synchronus
setTimeout(() => {// Asynchronus
    console.log('2'); 
}, 2000); // 0 --> same result
console.log('3');

// CALL STACK --> push()--> execute --> pop()

// WEB API --> setTimeout(), AJAX, DOM

// CALLBACK QUEUE --> callback() --> onClick(), onLoad()

// EVENT LOOP --> is stack empty then push the callback

// Memory Heap --> allocation










