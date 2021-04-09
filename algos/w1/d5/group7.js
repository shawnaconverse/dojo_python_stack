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
  // Declare expected variable if empty string
  var expected = "";
  if(arr.length == 0){
    return expected;
  }
  // Loop through array, concat values at index of array to expected string, and concat separator
  for(var i = h0; i < arr.length; i++){
    if(i == arr.length-1){
      expected += arr[i];
    }
    else{
      expected += arr[i];
      expected += separator
    }
  }
  return expected;
}

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/
 var expected = "";
  var samePages = [];
  //work
  for (var i = 0; i < nums.length; i++){
    if(nums[i+1]==nums[i]+1){
      samePages.push(nums[i]);
      samePages.push("-");
      samePages.push("end");
      for(var j = i+1; j < nums.length; j++){
        if(nums[j]+1==nums[j+1]){
          samePages.pop();
          samePages.push(nums[j]);
          i = j; 
        } 
        else if{
          (nums[j]+1!==nums[j+1]){
            j = nums.length;
          }
        }
        expected += samePages.join("");
        samePages = [];
      }
    }
    else{
      expected += nums[i];
      expected +=",";
    }
  }
  return expected;
