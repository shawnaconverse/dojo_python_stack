/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
// const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
// const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
// const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
// const expected5 = "";

function join(arr, separator) {
  var new_string = ""
  if (arr.length > 0) {
    for (var item = 0; item < arr.length; item++) {
      if (item < arr.length - 1) {
        new_string += arr[item] + separator
      } else {
        new_string += arr[item] 
      }
    }
  }
  return new_string
}

join(arr1,separator1)
join(arr2,separator2)
join(arr3,separator3)
join(arr4,separator4)

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
// const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  var new_string = ""
  for(var i = 0; i < nums.length; i++){
    for(var j = i; j < nums.length; j++) {
        if(nums[j]+1 == nums[j+1]) {
          console.log(nums[i])
          console.log(nums[j])
          new_string += nums[i] + "-" + nums[i+1] +", "
          i++;
        } else{
            if (i < nums.length - 1) {
              new_string += nums[i] + ", "
            } else {
              new_string += nums[i] 
            }
        }
      }
  }
  return new_string;
}

//1, 13-14, 14-15, 15, 37-38, 38, 70, 

bookIndex(nums1)