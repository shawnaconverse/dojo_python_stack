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
  compareItem = str[i.length];
  for(var i = 0; i < str.length; i ++){   //loop through string
    if(str[i] = compareItem){    //check to see if value at last index is the same as index[0]
      compareItem = compareItem[i.length -  1];   //decrease compareItem to next index
    }
    return;
  }
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

function longestPalindromicSubstring(str) 
  compareItem = str[i.length];
  newString = [];
  for(var i = 0; i < str.length; i ++){   //loop through string
    if(str[i] = compareItem){    //check to see if value at last index is the same as index[0]
      //need to add to new string but stop when it fails
      //need to create new strings and then compare all the lengths and return the longest one
      compareItem = compareItem[i.length -  1];   //decrease compareItem to next index
      return;
    }

}


