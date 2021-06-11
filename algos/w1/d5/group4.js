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
  var str = "";
  for (idx in arr) {
    if (idx < arr.length - 1) {
      str += arr[idx] + separator;
    } else {
      str += arr[idx];
    }
  }
  console.log(str);
  return str;
}
join(arr1, separator1);
join(arr2, separator2);
join(arr3, separator3);
join(arr4, separator4);
join(arr5, separator5);

/*****************************************************************************/

/* 
  Book Index
  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];

const expected1 = "1, 13-15, 37-38, 70";

function bookIndex(nums) {
  var str = "";
  var seq = [];
  var ptr = 0;
  while (ptr<nums.length){
    var expected = nums[ptr]+1;
    if(nums[ptr+1]==expected){
      seq.push(nums[ptr])
    }
    if(nums[ptr+1]!=expected && seq.length>0){
      seq.push(nums[ptr])
      str+=seq[0]+"-"+seq[seq.length-1]+", "
      seq=[]
    }
    else if(nums[ptr+1]!=expected && ptr!=nums1.length-1){
      str+=nums[ptr]+", "
    }
    else if(nums[ptr+1]!=expected  && ptr==nums1.length-1){
      str+=nums[ptr]
    }
    ptr+=1
  }
  console.log(str)
  return str;
}
bookIndex(nums1)





function bookpages(nums){
  return nums.split([]).join([])==nums
}


function bookIndex(nums) {
  for (let i = nums.length - 1; i > 0; i--){
    for ( let j = 0; j < nums.length - i; j++){
      if (bookpages(nums.subarr(j, j + i))) {
        return nums.subarr(j, j + i);
      }
    }
  }
}

console.log(bookIndex(nums1));