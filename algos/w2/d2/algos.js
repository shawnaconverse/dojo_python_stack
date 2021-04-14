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
  // SETUP
  var table = {};
  // WORK
  for (var i = 0; i < arr.length; i++) {
    if (table.hasOwnProperty(arr[i])) {
      table[arr[i]]++;
    } else {
      table[arr[i]] = 1;
    }
  }
  // RETURN
  return table;
}

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
  var words = wordsStr.split(" ");
  var reversedWords = "";

  for (var i = words.length - 1; i >= 0; i--) {
    reversedWords += words[i];

    // not add a space at the end of the string
    if (i !== 0) {
      reversedWords += " ";
    }
  }

  return reversedWords;
}

function reverseWordsOneLine(wordsStr) {
  return wordsStr.split(" ").reverse().join(" ");
}

