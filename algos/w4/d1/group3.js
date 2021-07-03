/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length< 1) {
    return 0;
  }
  return nums.pop() + sumArr(nums)

}


// not ross, act normal
function sumArr(nums) {
  if(nums.length==1){
      return nums[0];
  } else if(nums.length<1){
      return 0;
  } else {
      let finalNum=nums[nums.length-1];
      nums.length-=1;
      return finalNum + sumArr(nums);
  }
}



/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;


function recursiveSigma(num) {
  num = Math.floor(num)
  if (num <= 0) {
    return 0
  }
  return num + recursiveSigma(num-1)
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))




function recursiveSigma(num) {
  num=Math.floor(num);
  if(num==1){
      return num;
  } else if(num<1){
      return 0;
  } else {
      return num + recursiveSigma(num-1);
  }
}

// START FROM LARGERST #, AND WORK OUR WAY DOWN TO 0
// FIND A WAY TO GET THE NUM CLOSER TO 0






//QuickSort, just an example of a practical use of recursion
const arr1 = [17, 28, 90, 2,1,5,6,123,5,51,86,245,123,99,4,1,2,4,55,31,76,501, 74, 11, 21, 88, 91];
//hi oscar
function quickSort(arr) {
  if (arr.length <= 1){
    return arr
  }
  let pivot = arr[0]
  let lessThan = [];
  let moreThan = [];
  
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot){
      lessThan.push(arr[i])
    }
    else{
      moreThan.push(arr[i])
    }
  }
  
  return [...quickSort(lessThan), ...[pivot], ...quickSort(moreThan)]

}

console.log(quickSort(arr1))