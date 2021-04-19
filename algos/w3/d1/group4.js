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
    // setup
    var sum_left = 0;
    var sum_right = 0;
    // work
    for(var i = 0; i <nums.length; i++){
        sum_left += nums[i]
            for(var j= i+1; j<nums.length; j++){
                sum_right += nums[j];
            }
            if(sum_left === sum_right){
                console.log(sum_left)
                console.log(sum_right)
                return true
            }
        sum_right = 0;

    }
    // return
    return false;

}
console.log(balancePoint(nums1))
console.log(balancePoint(nums2))

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

function balanceIndex(nums) {
    // setup
    var sum_left=0;
    var sum_right=0;

    // work
    for(var i = 1; i <nums.length; i++){
        sum_left += nums[i-1];
        for(var j= i+1; j<nums.length; j++){
            sum_right += nums[j];
        }
        if(sum_left === sum_right){
            return i;
        }
        sum_right = 0;

    }
    // return
   return -1;
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))