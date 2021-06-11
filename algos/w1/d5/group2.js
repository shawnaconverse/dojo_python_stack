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
// have an empty string
// 
function join(arr, separator) {
  var str = ""
  if(arr.length == 0){
    return ""
  }
  for (var i = 0; i< arr.length - 1; i++){
    str += arr[i] + separator;
  }
  str += arr[arr.length-1]
  return str
}

console.log(join(arr5,separator5));











// function join(arr, separator) {
//   if(arr.length == 0){
//     return ""
//   }
//   if(arr.length == 1){
//     return arr[0]
//   }
//   return `${arr.shift()}${separator}${join(arr, separator)}`
// }

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

// putting numbers into a list and stopping if last number added 
// and the next number aren't increments
// 1 + 1 == next position?
function bookIndex(nums) {
  var output = '';
  output += nums[0];
  for (var i=1; i<nums.length; i++){
    if (nums[i-1]+1 == nums[i]) {
      output += nums[i];
    } else {
      output += ", " + nums[i];
    }
  }
  return output
  }

console.log(bookIndex(nums1))




const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected6 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  let str = '';
  let startIndex = nums[0]

  for (let i = 1; i < nums.length; i++){
    
    if (nums[i]-nums[i-1]!==1){

      if (nums[i-1] == startIndex){
        str+=startIndex+', ';
        startIndex = nums[i];
      }

      else{
        str+=startIndex+'-'+nums[i-1]+', '
        startIndex = nums[i]
      }
    }
  }

  if (startIndex !== nums[nums.length-1]){
    str+= startIndex+'-';
  }
  str+=nums[nums.length-1]
  return str
}


console.log(bookIndex(nums1))

// Got it