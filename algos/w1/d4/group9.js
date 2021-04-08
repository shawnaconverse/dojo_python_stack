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

    var reversed_str = ""

    for(var i = str.length - 1; i >= 0; i--) {
      var char = str[i];
      reversed_str += char
    }

if(reversed_str === str) {
  return true;
}
    return false;
}

// console.log(isPalindrome(str1))
// console.log(isPalindrome(str2))
// console.log(isPalindrome(str3))
// console.log(isPalindrome(str4))


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
  var substr = "";
  var longestPalindrome = str[0];
  // loop through the string
  for(var i = 0; i < str.length; i++) {
    for(var j = i; j < str.length; j++) {
      var char = str[j]
      substr += char
    }
    // check each substring to see if its a palindrome
    if(isPalindrome(substr)) {
      if(substr.length > longestPalindrome.length) {
        longestPalindrome = substr;
      }
    }
  }
  // return longest palindromic substring
  return longestPalindrome;
}

console.log(longestPalindromicSubstring(str1))