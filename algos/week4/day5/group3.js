/*
    Given aan array nested with unknown amount of arrays,
    return the integers all under ONE array.
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const expected1 = [1, 2, 3, 4, 5, 6];

const arr2 = [1, 2, [4, 5], 6];
const expected2 = [1, 2, 4, 5, 6];

const arr3 = [1, 2, [3, 4, [5]], 6];
const expected3 = [1, 2, 3, 4, 5, 6];

/* 
    Two useful built in functions:
    Array.isArray() : returns true if argument is an array
        - Array.isArray([1, 2, 3]) => true
        - Array.isArray([4, 5, 6]) => true
        - Array.isArray(1) => false
    
    Array.concat() : concatenates two arrays together
        - arr1.concat(arr2) => [1, 2, 3, 4, 5, 6, 1, 2, [4, 5], 6]
*/

function recursiveFlatten(arr) {}
