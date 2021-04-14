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
  // add return object
  var new_obj = {};
  // iterate through array and find each unique value
  for(var i = 0; i < arr.length; i++){
    var counter = 1;
    if(!(arr[i] in new_obj)){
      for(var j = i+1; j < arr.length; j++){
        if(arr[j] == arr[i]){
          counter++;
        }
      }
      new_obj[arr[i]] = counter;
      counter = 1;
    }
  }
  return new_obj;
}
console.log(frequencyTableBuilder([]))

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

var str1 = "This is a test";
var expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
  return wordsStr.split(" ").reverse().join(" ")
}
console.log(reverseWordOrder("This is a test"))