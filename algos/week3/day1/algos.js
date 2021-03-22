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
    var len = nums.length
    if (len < 2) {
        return false;
    }

    var left = nums[0];
    var right = 0;

    for (var i = 1; i < len; i++) {
        right += nums[i];
    }

    for (var i = 1; i < len; i++) {
        if (left === right) {
            return true;
        }

        right -= nums[i]
        left += nums[i]
    }
    
    return false;
}


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
    var len = nums.length;
    if (len < 3) {
        return -1;
    }

    var left = nums[0];
    var right = 0;
    for (var i = 2; i < len; i++){
        right += nums[i];
    }

    for (var i = 1; i < len - 1; i++){
        if (left === right) {
            return i;
        }

        right -= nums[i + 1];
        left += nums[i];
    }

    return -1;
}