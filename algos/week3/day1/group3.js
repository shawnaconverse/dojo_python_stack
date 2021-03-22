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

sum = 0;
#iforgot the syntax ; yeah mybad idk the syntax thats all i got
function balancePoint(nums) {
    for (var i = 0; i < arr.length; i++) {
        ? = array[i];
        sum+= ?
    }
    middle? = sum/2;
    sum2=0;
    ?? = 0;
    while(sum2< middle? && ?? < arr.length){
        sum2 += array[??]
        ??++;
    }
    return sum2 == middle? (?? - 1) : -1;
}

function balancePoint(nums) {
    //setup
    var left_sum =0;
    var right_sum = 0;
    answer = false;
    //work
    for(i = 0; i < nums.length; i++)
    {
        left_sum = left_sum + nums[i];
        right_sum = 0;
        for(j = i+1; j < nums.length; j++)
        {
            right_sum = right_sum + nums[j]
        }
        console.log(left_sum + " " + right_sum)
        if(left_sum != right_sum)
        {

        }
        else{
            answer = true;
            break;
        }
    }
    //return
    console.log(answer)
    return answer
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


function balanceIndex(nums) {}