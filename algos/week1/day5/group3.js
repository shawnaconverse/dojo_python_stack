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
    var new_string =""
    for(var i=0; i<arr.length; i++){
        new_string = new_string + arr[i];
        if( i < arr.length -1)
        {
            new_string = new_string + separator;
        }
    }
    return new_string;
}

console.log(join(arr1,separator1));

/*****************************************************************************/


/* 
    Book Index
    Given an arry of ints representing page numbers
    return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/


const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";


function bookIndex(nums) {
    var temp = [];
    for (var i=0; i<nums.length; i++){
        if(nums[i]+1 == nums[i + 1]){
            while (nums[i]+1 == nums[i+1]) {
                i++;
                if(nums[i+1] < nums[i]) {
                    nums[i-1] + "-" + nums[i];
                }
            }
        }
        if(nums[i+1]>nums[i]){
            nums[i+1] + "-" + nums[i];
        }
        return join(temp,',');
    }
}
console.log(bookIndex(nums1))
