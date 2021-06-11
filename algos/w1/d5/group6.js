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

var t =""

for (var i=0; i<arr.length; i++){
    t += arr[i]


}




// PSUDO CODE
// 1. SET UP WORK, AND THE RETURN 
// 2. WE WANT TO MAKE A VARIABLE TO PUT OUR STRING IN
// 3. WANT TO RETURN VALUE FOR T



const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// VAR    |    VALUE
// i           0 --> 
// t           "" -->

function join(arr, separator) {
  var t =""
  for (var i=0; i<arr.length; i++){
    t += arr[i]
  }  
  return t
}

console.log(join(arr3, separator3));

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {}
