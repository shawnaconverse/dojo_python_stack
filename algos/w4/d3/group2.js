const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {
  let found = false;      //declare variable
  //console.log(sortedNums);   debug line
  if (sortedNums.length  == 0) return false;   //empty array return false
  //base case only 1 number in array
  if(sortedNums.length == 1){
    if (searchNum == sortedNums[0]) return true;
    else return false;
  }

  let middleIndex = Math.floor(sortedNums.length/2);       // find the middle index
 
  if (searchNum == sortedNums[middleIndex]) return true;          //check if middle number is the one we are looking for
  else if (searchNum > sortedNums[middleIndex])found = binarySearch(sortedNums.slice(middleIndex+1),searchNum); //check the larger half of the array
  else found = binarySearch(sortedNums.slice(0,middleIndex),searchNum);       //search the lower half of the array
  return found;
}

console.log(binarySearch(nums1,4));
console.log(binarySearch(nums2,5));
console.log(binarySearch(nums3,3));