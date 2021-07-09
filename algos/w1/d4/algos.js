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
  for (var i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
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
  var checkPalen = "";
  var longPalen = False;

  //For loop through string
  for (i = 0; i < str.length; i++) {
    //Set a starting point to check for long palindrome
    checkPalen = checkPalen + str[i];

    //loop through characters after i
    for (x = i + 1; x < str.length; x++) {
      checkPalen = checkPalen + str[x];

      if (str[i] == str[x]) {
        longPalen = isPalindrome(checkPalen);

        if (longPalen == true) {
          return checkPalen;
        }
      }

      checkPalen = "";
    }
  }

  return str[0];
}
