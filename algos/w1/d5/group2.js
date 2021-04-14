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

function join(arr, separator) {
  var str = "";

  for(var i = 0; i < arr.length; i++) {
    var char = arr[i];
    
    if (i == arr.length - 1) {
      str += char;
    }
    else {
      str += char + separator;
    }
  }
  return str;
}

console.log(join(arr1, ", "))
console.log(join(arr2, "-"))
console.log(join(arr3, " - "))
console.log(join(arr4, ", "))
console.log(join(arr5, ", "))



/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  for(var i = 0; i < nums.length; i++) {
    var num1 = nums[i];
    for(var j = i + 1; j < nums.length; j++) {
      var num2 = nums[j]
      if(num2 == num1 + 1) {

      }
    }
  }
}
