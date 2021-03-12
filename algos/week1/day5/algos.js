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
    // SETUP
    var joined = "";
    // EDGE CASE
    if (!arr.length) {
        return joined;
    }

    // WORK
    // length 5, i = 0, 1, 2, 3
    for (var i = 0; i < arr.length - 1; i++) {
        // BUILD OUR STRING
        joined += arr[i] + separator;
    }

    // RETURN
    return joined + arr[arr.length - 1];
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
    var bookStr = "";
    
    // WORK
    for (let i = 0; i < nums.length; i++) {
        // declare a second pointer
        var j = i + 1;
        // if nums[i + 1] aka nums[j] is +1 greater than nums[i], increment
        while (nums[j] == nums[j - 1] + 1) {
            j++;
        }

        // if j is equal to i + 1, then there is no sequence
        if (j === i + 1) {
            bookStr += nums[i];
        }

        // if j is greater than i + 1, then there is a sequence
        // j is one past the end of the sequence
        if (j > i + 1) {
            bookStr += nums[i] + "-" + nums[j - 1];
            i = j - 1;
        }

        // if i is not at nums.length - 1, then append the comma
        if (i < nums.length - 1) {
            bookStr += ", ";
        }
    }

    // RETURN
    return bookStr;
}