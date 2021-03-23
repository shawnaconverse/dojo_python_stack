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
    var leftInd = 0
    var rightInd = sortedNums.length - 1

    while (leftInd <= rightInd) {
        var midInd = Math.floor((rightInd + leftInd) / 2)
        if (searchNum == sortedNums[midInd]) {
            return true
        }
        else if(searchNum < sortedNums[midInd]){
            rightInd = midInd - 1
        }
        else if(searchNum > sortedNums[midInd]){
            leftInd = midInd + 1
        }     
    }
    return false
}
console.log(binarySearch([1, 3, 5, 6] , 4));
console.log(binarySearch([3, 4, 6, 8, 12] , 3));
console.log(binarySearch([4, 5, 6, 8, 12] , 5));