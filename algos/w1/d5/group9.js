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
  if(arr.length == 0){           //check to see if array is empty
    return "";                    //print out ""
  }
  elseif(arr.length == 1){           //check to see if array has one item
    return arr[0];                  //print only item
  }          
  var str = ""
  for(i = 0; i < arr.length, i++){
    str = str + arr[i];             //add to string
    if(i != arr.length - 1){
      str = str + separator;
    }
  }
  return str
}
console.log(join(arr1,separator1));
 
/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {}
//go through array
//make a string variable
//starting at arr[i]
    //add arr[i] to string
//compare arr[i] to arr[i]+ 1
// if arr[i + 1] == next digit
    //when if fails, add separator and the numbeto the string
