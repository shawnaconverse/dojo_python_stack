/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

function join(arr, separator){
  var str = ""
  str = arr.join(separator)
  return str
}

const arr1 = [1,2,3];
const separator1 = ", "
const expected1 = "1, 2, 3";
var joinedArr1 = join(arr1, separator1)
console.log(joinedArr1)

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";
var joinedArr2 = join(arr2, separator2)
console.log(joinedArr2)

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";
var joinedArr3 = join(arr3, separator3)
console.log(joinedArr3)

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";
var joinedArr4 = join(arr4, separator4)
console.log(joinedArr4)

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
var joinedArr5 = join(arr5, separator5)
console.log(joinedArr5)

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/


function bookIndex(nums) {
  var range = ""
  var rangeArr = []
  for (var i = 0; i < nums.length; i++){
      if (nums[i] + 1 == nums[i+1]){
          if (nums[i+1]+1 == nums[i+2]){
              
          }
      }
      while (nums[i] + 1 == nums[i+1]){
          console.log("num is: ", nums[i])
          rangeArr.push(nums[i])
          rangeArr.push(nums[i+1])
          i++
      }
      range = rangeArr.join("-")
  }
  return range
}

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";
console.log(bookIndex(nums1))

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {}
