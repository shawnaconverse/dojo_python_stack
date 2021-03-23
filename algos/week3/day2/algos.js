/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .
*/

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
    var leftIdx = 0;
    var rightIdx = sortedNums.length - 1;
    
    while(leftIdx <= rightIdx) {
        var midIdx = Math.floor(rightIdx - leftIdx / 2);
        
        if (sortNums[midIdx] === searchNum) {
            return true;
        }

        if (searchNum < sortedNums[midIdx]) {
            rightIdx = midIdx - 1;
        } else {
            leftIdx = midxIdx + 1;
        }
    }
    return false;
}