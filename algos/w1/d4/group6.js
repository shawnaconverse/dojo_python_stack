// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }


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
  var arr = str.split("")
  var reversed = arr.reverse()
  reversed1 = reversed.join('')
  if (reversed1 == str) {
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome(str1))
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
  var str1 =" "
  for(var i = 0; i<str.length; i++) {
    for( var j = 1; j < str.length+1; j++) {
      var str2 = str.substr(i,j)
      if (isPalindrome(str2) == true) {
        if (str2.length > str1){
          str1 = str2
        }
      }
    }
  }
  if(str1 == null){
    str1 = str[0]
  }
  console.log(str1)
}
  

