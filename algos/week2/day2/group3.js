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


function encodeStr(str) {
    // Edge cases, empty strings or 1 character strings
    if (str.length < 2) {
        return str;
    }
    // SETUP
    var charFreq = {};
    var encoded = "";
    // WORK
    for (var char in str) {
        // Truthy and Falsy
        if (charFreq[char]) {
            charFreq[char]++;
        } else {
            charFreq[char] = 1;
        }
    }

    // Objects (Dictionaries) UNORDERED NO GUARANTEE 
    for (var char in str) {
        // checking the value of that key.
        // Positive number == True
        // 0 == False
        if (charFreq[char]) {
            // "" += 'a' + 4
            // "a4" += 'b' + 2
            encoded += char + charFreq[char];
            // a4a4a4a4b2b2c1d3d3d3
            // actual resutlt a4b2c1d3
            charFreq[char] = 0
        }
    }

    // RETURN
    // When we return comparison to the input string
    // TERNARY OPERATOR
    return encoded.length < str.length ? encoded : str;
    if (encoded.length < str.length) {
        return encoded;
    } else {
        return str;
    }
}


const arr = ["a", "b", "a", "c", "B", "c", "c", "d"];
const getFrequency = (array) => {
    const map = {};
    array.forEach(item => {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    });
    return map;
};
console.log(getFrequency(arr));

/*****************************************************************************/


/* 
    Reverse Word Order
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";


function reverseWordOrder(wordsStr) { }