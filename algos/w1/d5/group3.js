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
  var returnString = ""
  for (i = 0;i<arr.length;i++){
    if(arr[i + 1] == undefined){
      returnString += arr[i];
    }
    else{
      returnString += arr[i] + separator
    }
  }
  return returnString
}

console.log(join(arr1, separator1))

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  var reString = ""
  var collapsedNumber = []
  for (var i = 0; i< nums.length; i++){
    if(nums[i] + 1 == nums[i+1]){
      for(var j = nums[i]; j < nums.length; j++){
        collapsedNumber += nums[i]
        if(nums[j] + 1 != nums[j+1] ){
          i += collapsedNumber.length
          reString += collapsedNumber[0] + "-" + collapsedNumber[collapsedNumber.length - 1]
          collapsedNumber = []
          break
        }
      }
    }
    
    
    reString += nums[i] + ", "
  }
  return reString
}

console.log(bookIndex(nums1))

