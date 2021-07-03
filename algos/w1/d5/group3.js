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
  let joined = ""
  if (arr.length > 0) {
    for (let i = 0; i < arr.length-1; i++) {
      joined += arr[i] + separator;
    }
    joined += arr[arr.length-1];
  }
  return joined;
}

/*****************************************************************************/

/*
  Book Index
  Given an arry of ints representing page numbersreturn a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  let booked = "";
  if (nums[1] - nums[0] != 1){
    booked += nums[0] + ", ";
  }
  let lower = nums[1];
  for (let i = 2; i < nums.length; i++) {
    let higher = nums[i];
    if (higher-lower === 1 && nums[i+1] - higher != 1) {
       booked += lower + "-" + higher + ", ";
       lower = nums[i+1];
    }
    else if ((i+1) === nums.length-1) {
     booked += lower + ", " + nums[i+1]; 
     i++;
    }
    else if(i+1 === nums.length) {
      booked += nums[i];
    }
    else if (higher != lower && higher-lower != 1) {
      booked += lower + "-" + higher + ", ";
      lower = nums[i+1];
      i++;
    }
  }
  return booked;
}
//let me see
function bookIndex1(nums) {

  var i = 0;
  while (i < nums.length) {
    if (i != 0)
    console.log(", ");
    var range = i;
      console.log(nums[i++]);
      while (i < nums.length && nums[i] == nums[i - 1] + 1)
          i++;
      if (i > range + 1)
          console.log(" - " + nums[i - 1]);
  }
}
bookIndex1(nums1)