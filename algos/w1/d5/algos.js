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
    separator = ", ";
  }
  if (arr.length > 0) {
    for (var i = 0; i < arr.length - 1; i++) {
      result += arr[i] + separator;
    }
    result += arr[arr.length - 1];
  }
  return result;
}

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  // SETUP
  var str = "";

  // WORK
  for (var i = 0; i < nums.length; i++) {
    var j = i + 1;
    while (nums[j] == nums[j - 1] + 1) {
      // nums[2] = 14
      // nums[2 - 1] = 13
      // nums[2] == nums[2 - 1]  + 1
      // 14 ==  13 + 1
      j++;
    }
    // if j is equal to the i + 1, then the next number is not a sequence
    if (j == i + 1) {
      str += nums[i];
    }
    // if j is greater than i + 1, then we found a sequence
    // j is one past the last number in the sequence
    if (j > i + 1) {
      str += nums[i] + "-" + nums[j - 1];
      i = j - 1;
    }
    // if i is not at nums.length - 1, the append a comma &  space
    if (i < nums.length - 1) {
      str += ", ";
    }
  }

  // RETURN
  return str;
}
