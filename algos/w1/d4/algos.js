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
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    // Loop inwards from both sides of the string
    var leftChar = str[i];
    var rightChar = str[str.length - 1 - i];

    if (leftChar !== rightChar) {
      return false; // exit early if characters do not match
    }
  }
  return true;
}

function isPalindromeOneLine(str) {
  return str === str.split("").reverse().join("");
}

/*****************************************************************************/

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK..
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
  // SETUP
  var longestPalindrome = str[0];

  // WORK
  // generating every single sub string 1 at a time
  // check to see if it is a palindrome
  // if it is, we then check its length against longestPalindrome
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length + 1; j++) {
      var subStr = str.slice(i, j);

      if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
        longestPalindrome = subStr;
      }
    }
  }

  // RETURN
  return longestPalindrome;
}
