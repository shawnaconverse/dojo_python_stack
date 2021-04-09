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
  var result = "";
  if (separator == "") {
      separator =", "
  }
  if (arr.length > 0) {
      for (var i = 0; i < arr.length - 1; i++) {
          result += arr[i] + separator
      }
      result += arr[arr.length -1]
  }
  return result
}
console.log(join(arr1, separator1))
console.log(join(arr2, separator2))
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
    var result = "";
    for (var i = 0; i < nums.length - 1; i++) {
        result += nums[i];
        var count = 0;
        while (nums[i] + 1 == nums[i+1]) {
            i++;
            count++;
        }     
        if (count > 0) {
            result += "-" + nums[i];
        }
        result += ", "
    }
    result += nums1[nums1.length - 1]
    return result;
}
console.log(bookIndex(nums1));