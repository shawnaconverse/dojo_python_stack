/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

//create string
//loop through arr1
//for each arr1, concat the index value and an instance of the seperator, checking if it's the last value before inserting (!= arr.length-1)

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function join(arr, separator) {
  let resultString = ""
  if (arr.length ===0){
    return " "
  }
  else{
    for(let i = 0; i < arr.length ;i++){
      resultString += arr[i]
      if (i === arr.length-1){
        return resultString
      }
      else{
        resultString += separator
      }
    }
  }
}

console.log(join(arr1, separator1))
console.log(join(arr2, separator2))
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))


/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function join(arr, separator) {}

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [1, 2, 13, 14, 15, 37, 38, 70];


function bookIndex(nums) {
  let rangeString = ""
  rangeString += nums[0]
  let commasSpacer = ", "
  for (let i = 1; i < nums.length ;i++){
    if (nums[i] - 1 === nums[i-1]){ //check for sequence if it is, completely skip index
    }
    else{
      if (i != 1){  //standard output
        rangeString += "-"
        rangeString += nums[i-1]
      }
      else if(nums[i] - 1 != nums[i-1]){ //if index 0-1, and not a range, does ", "
      }
      else{ //if index 0-1+ and a range, does "x-y, "
        rangeString += "-"
        rangeString += nums[i-1]
      }
      rangeString += commasSpacer
      rangeString += nums[i] //starts the next range in the string
    }
  }
  return rangeString
}

console.log(bookIndex(nums1))
console.log(bookIndex(nums2))

//create string
//save first element of array to string
//loop through array
// for each value, check if it the value before it is ==str[i]-1
//if yes, ignore value
//if no, concat "-" and previous str[i]
//after, insert ", "