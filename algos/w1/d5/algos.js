/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/
// "", " ", ",", ", ", ";", "theworksofshakespear;"
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
  var new_string = "";
  if (arr.length > 0) {
    for (var item = 0; item < arr.length; item++) {
      if (item < arr.length - 1) {
        new_string += arr[item] + separator;
      } else {
        new_string += arr[item];
      }
    }
  }
  return new_string;
}

function join2(arr, separator) {
  let newStr = "";
  if (arr.length == 0) return newStr;
  if (arr.length == 1) return newStr + arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    newStr += arr[i] + separator;
  }
  newStr += arr[arr.length - 1];

  return newStr;
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
  for (var currentIdx = 0; currentIdx < nums.length; currentIdx++) {
    var rangeEndIdx = currentIdx + 1;
    // if nums[currentIdx + 1] is +1 greater than nums[currentIdx], then increment
    while (nums[rangeEndIdx] == nums[rangeEndIdx - 1] + 1) {
      rangeEndIdx++;
    }

    // if rangeEndIdx == currentIdx + 1, then there is no range
    if (rangeEndIdx == currentIdx + 1) {
      str += nums[currentIdx];
    }

    // if rangeEndIdx is greater than currentIdx + 1, then there is a range
    // rangeEndIdx is one past the end of the range
    if (rangeEndIdx > currentIdx + 1) {
      str += num[currentIdx] + "-" + nums[rangeEndIdx - 1];
      currentIdx = rangeEndIdx - 1;
    }

    // if currentIdx is not at nums.length - 1, then append the comma
    if (currentIdx < nums.length - 1) {
      str += ", ";
    }
  }

  // RETURN
  return str;
}
