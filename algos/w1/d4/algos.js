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

// 3n - where n is length of string
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// n^2
// for (var item in arr) {
//   for (var thing in arr) {

//   }
// }

// n/2 - where n is length of string
function isPalindrome2(str) {
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    var leftChar = str[i];
    var rightChar = str[str.length - 1 - i];

    if (leftChar !== rightChar) return false;
  }
  return true;
}


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

// n^2
function longestPalindromicSubstring(str) {
  var longestPalidrome = str[0];

  // generate every possible substring one at a time
  // check if its a palindrome
  // check if longer than longestPalindrome
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length + 1; j++) {
      var subStr = str.slice(i, j);

      if (subStr.length > longestPalidrome.length && isPalindrome2(subStr)) {
        longestPalidrome = subStr;
      }
    }
  }
  return longestPalidrome;
}
