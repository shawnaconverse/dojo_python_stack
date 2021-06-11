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
  let joinedStr = "";
  for (var i = 0; i < arr.length; i++) {
    joinedStr += arr[i];
    if (arr[i + 1]) {
      joinedStr += separator;
    }
  }
  return joinedStr;
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
  // We need to loop over the array
  for (var i = 0; i < nums.length; i++) {
    // assign a second pointer, j, to the element after i
    var j = i + 1;

    // Check to see if there is a range between j and i
    // if there is a range, I need to push j forward to look for the
    // end of the range
    // looking at j, and the element before j, and seeing if there is a difference of 1
    while (nums[j] === nums[j - 1] + 1) {
      j++; // j will end one index beyond the end of the range
    }

    // if j is equal to i + 1, then i dont have a range
    if (j === i + 1) {
      str += nums[i];
    }

    // if j is greater than i + 1, then we have found a range
    // j is one index beyond the end of the range
    if (j > i + 1) {
      str += nums[i] + "-" + nums[j - 1];
      i = j - 1;
    }

    // if i is not at nums.length - 1, then append the comma
    if (i < nums.length - 1) {
      str += ", ";
    }
  }

  // RETURN
  return str;
}
