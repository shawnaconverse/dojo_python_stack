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


function binarySearch(sortedNums, searchNum){
    var leftIdx = 0;
    var rightIdx = sortedNums.length - 1;
    var midIdx = Math.floor((leftIdx + rightIdx)/2)

    while (leftIdx <= rightIdx){
        midIdx = Math.floor((leftIdx + rightIdx)/2)
        if (sortedNums[midIdx] === searchNum){
            return true;
        }
        else if (sortedNums[midIdx] > searchNum){
            rightIdx = midIdx - 1 ;
        }
        else if (sortedNums[midIdx] < searchNum){
            leftIdx = midIdx + 1;
        }
        
    }
    return false;
}

binarySearch (nums3 , 3)