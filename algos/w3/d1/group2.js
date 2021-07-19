/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;


function balancePoint(nums) {
  //Setup variables 
    let flag = false; 
    let leftCount = 0;
    let leftSum = 0; 
    let rightSum = nums[nums.length-1];
    let rightCount = nums.length-1;

  //work, the while loop
    while(flag == false){
    if(leftCount == rightCount){
        if(leftSum == rightSum){
        return true; 
        }
        else{
        return false; 
        }
    }
    // Works when the right and left not equal, leftSum adds at it's index
    else if(leftSum != rightSum){
        leftSum += nums[leftCount];
        console.log(leftSum)
        console.log(rightSum)
        leftCount++;      
    }
    // Will only work when leftSum and rightSum equal, moves the rightCount left and adds at index to rightSum
    else if(leftSum == rightSum){
        rightCount--; 
        rightSum += nums[rightCount];
    } 
    }
}

console.log(balancePoint(nums1));
console.log(balancePoint(nums2));


/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

// function balanceIndex(nums) {

// let leftSum = 0
// let rightSum = 0


// // a for loop that iterates through the Array
// //   a for loop that iteates through the array from I + 1

//   for(let i =1; i < nums.length; i++){
  //     leftSum  += nums[i-1];
  //     for(let j =1; j<nums.length; j++){
    //       if (j != i){
      //         rightSum += nums[j]
      //       }
      //       if(leftSum == rightSum){
        //         return i;
        //       }
        //     }
        //   }
        
        
        
        const nums1 = [-2, 5, 7, 0, 3];
        const expected1 = 2;
        
        const nums2 = [9, 9];
        const expected2 = -1;
        
    function balanceIndex(nums) {
    //Setup variable
    let leftSum = 0; 
    let rightSum = 0;

    if (nums.length < 3) return -1; 
    
    
    for(let i = 1; i < nums.length; i++){
    leftSum += nums[i-1];
      for(let j = i; j < nums.length; j++){
      
        if(j != i){
        rightSum += nums[j]; 
        }
        if(leftSum == rightSum){
        return i;
        }
    }
    rightSum = 0;  
    }
    return -1; 
}


console.log(balanceIndex(numsBot1));
console.log(balanceIndex(numsBot2));

