/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
    Object.hasOwnProperty("keyName")
        - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3, 
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};


function frequencyTableBuilder(arr) {
    var charFreq = {};
    var count = "";

    // if (arr.length = 0){ // if list is empty  
    //     return count;
    // }
    for (var char in arr) {
        if (charFreq[char] == charFreq[char+1]){
            charFreq[char]++;
        } else {
            charFreq[char] = 1;
        }
    }

    for (var char in arr) {
        if (charFreq[char]) {
            count += char + charFreq[char];
            charFreq[char] = 0
        }
    }
    return charFreq[char] + count;
}

console.log(frequencyTableBuilder(arr1));


/*****************************************************************************/


/* 
    Reverse Word Order
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";


function reverseWordOrder(wordsStr) {}