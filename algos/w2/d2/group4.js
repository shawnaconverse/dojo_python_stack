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
  charFrequency = {}
  // iterate array
  for (var chr of arr){
      // if char not in object, store it in object and value is 1, or else increase its value
      charFrequency[chr] = charFrequency[chr] + 1 || 1
  }

  return charFrequency
}


console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))

//-------------
function frequencyTableBuilder(arr) {
  var dict = {}
  for( var i = 0; i<arr.length; i++){
    if(dict.hasOwnProperty(arr[i])){
      dict[arr[i]]++
    }
    else{
      dict[arr[i]]=1
      console.log(dict)
    }
  }
  return dict
}

console.log(frequencyTableBuilder(arr2))

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
    return wordsStr.split(' ').reverse().join(" ")
}

console.log(reverseWordOrder(str1))
// --------
function reverseWordOrder(wordsStr) {
  var arr = wordsStr.split(' ')
  var arr2 = []
  // for(var i = arr.length-1; i>=0; i--){
  for(var i = arr.length; i>=0;  i--){
    arr2.push(arr[i])
  }
  return arr2.join(" ")
}
console.log(reverseWordOrder(str1))

// -------------

const reverseArr = (arr) => {
  // reverse array uisng two pointers, time : O(N/2)
  let left = 0,
      right = arr.length - 1;
  while (left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]]
  }
  return arr
}

function reverseWordOrder(wordsStr) {
  wordArr = wordsStr.split(' ')
  return reverseArr(wordArr).join(" ")
}



