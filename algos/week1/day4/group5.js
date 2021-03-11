/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;


function isPalindrome(str) {
    var newString = ""
    for(var i = 0; i < str.length ; i++){
        newString = str[i] + newString;
    }
    if(newString === str){
        return true;
    }
    return false;
}

x = isPalindrome(str4)
console.log(x)

// I think what we need to do here is create a for look and use if statements to return a boolean. ~ does that sound right?

/*****************************************************************************/


/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";


function longestPalindromicSubstring(str) {
    for(var i = 0, b = str.length - 1; i <= (str.length/2)

}