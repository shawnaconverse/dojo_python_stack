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

//create empty object
//iterate through array
//if key is not found in object, add to object, and add 1 to its value in the object
//if key is found, add 1 to it's value in the object
//return the object


function frequencyTableBuilder(arr) {
  frequencyDict = {}
  for (let i = 0; i < arr.length ;i++){ //we dont need your fancy pants built in functions =D =D
      let existsTrigger = false
      for (j in frequencyDict){
          if (arr[i] === j){
              frequencyDict[j] += 1
              existsTrigger = true
          }
      }
      if (!existsTrigger){
          frequencyDict[arr[i]] = 1
      } 
  }
  return frequencyDict
}


function frequencyTableBuilderButWithhop(arr) {
  frequencyDict = {}
  for (let i = 0; i < arr.length ;i++){
    if (frequencyDict.hasOwnProperty(arr[i])){
      frequencyDict[arr[i]]++
    }
    else{
      frequencyDict[arr[i]] = 1
    }
  }
  return frequencyDict
}

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))
console.log(frequencyTableBuilder(arr3))

console.log(frequencyTableBuilderButWithhop(arr1))
console.log(frequencyTableBuilderButWithhop(arr2))
console.log(frequencyTableBuilderButWithhop(arr3))
/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

//split the string into an array of each word
//read the array in reverse order
//concat into a new string wit " " between


function reverseWordOrder(wordsStr) {
  let wordsSplit = wordsStr.split(" ")
  let reversedString = ""
  for (let i = 0; i< wordsSplit.length ;i++){
      reversedString += wordsSplit[wordsSplit.length-1-i]
      reversedString += " "
  }
  return reversedString
}

