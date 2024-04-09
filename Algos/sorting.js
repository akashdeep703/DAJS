//
const num = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// Bubble Sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const bubble = bubbleSort(num);
console.log("🚀 ~ bubble:", bubble)

// selection sort
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // set current index as mininum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                // update minimum if current is lower than what we had previously                
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const selection = selectionSort(num);
console.log("🚀 ~ selection:", selection)
// insertion sort
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            // move number to the first postion
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }

    }
    return array;
}

const insertion = insertionSort(num);
console.log("🚀 ~ insertion:", insertion)

//merge sort
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // split array into right and left
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);


    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const merg = mergeSort(num);
console.log("🚀 ~ merge:", merg)
