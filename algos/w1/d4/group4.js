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
  for (const i = 0; i < str.length; i++) {
    let j = str.length - 1 - i;
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));

// function isPalindrome(str) {
//   for (const i = 0; i < str.length / 2; i++) {
//     let j = str.length - 1 - i;
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

//THE ONE LINER WORKS--RICK
// AWESOME!! -Mark
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
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

function longestPalindromicSubstring(str) {
  for (let i = str.length - 1; i > 0; i++) {
    for (let j = 0; j < str.length - i; j++) {
      if (isPalindrome(str.substring(j, j + i))) {
        return str.substring(j, j + i);
      }
    }
  }
}

longestPalindromicSubstring(str1);
longestPalindromicSubstring(str2);
longestPalindromicSubstring(str3);
