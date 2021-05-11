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
  var freq = {}; //Set empty dictionary
  for (var i = 0; i < arr.length; i++) { // Create For Loop that walks through length of arr
    var character = arr[i]; // Sets variable as the i index of arr
    if (freq[character]) { // checks dictionary for an instance of the character. If character exists, add to count
      freq[character]++;
      } else { // if character doesn't exit, sets character with value of 1
        freq[character] = 1;
      }
  }
  return freq;
}

console.log((arr1))

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
  // var array = wordsStr.split(' ')
  // array.reverse()
  // array = array.join(' ')
  // return array
  var arry = [];
  var new_str = "";
  for(var i = 0; i <= wordsStr.length; i++){
    if(wordsStr[i] == " " || i == wordsStr.length) {
      arry.splice(0,0, new_str)
      new_str = ""
    } else{
      new_str += wordsStr[i];
    }
  }
  for(var j = 0; j < arry.length; j++){
    new_str+=arry[j] + ' '
  }
  return new_str
}


reverseWordOrder(str1)

