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
  //set up
  var reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse === str;
  if (reverse == str) {
    return true;
  } else {
    return false;
  }
}

function isPalidromeOneLine(str) {
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
  // SETUP
  var longestPalindrome = str[0];

  // WORK
  // generate every single possible sub string and check
  // if it is a palindrome.
  // then also check if its the longest
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      var subStr = str.slice(i, j); // returns  a substring between the two indexes

      // we are checking that both the subStr is a Palindrome
      // AND
      // the subStr length is greater than longestPalindrome 
      if (isPalindrome(subStr) && subStr.length > longestPalindrome.length) {
        longestPalindrome = subStr;
      }
    }
  }

  return longestPalindrome;
}
