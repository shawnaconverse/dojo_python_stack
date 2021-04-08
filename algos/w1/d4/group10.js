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
  // get string into array
  var new_str = str.split("");
  // reverse original string
  var rev_new_str = new_str.reverse();  // This is still reversing "new_str" for whatever reason.  According to Google results, this function just sucks and will retroactively mutate the array.  Yes, even in the code above where its mutating. Way to go, you wasted the entire time on a bad line of thought.

  console.log(new_str);
  console.log(rev_new_str);

  new_str = new_str.reverse();  //  And this reverses both new_str and rev_new_str....for some reason.

  console.log(new_str);
  console.log(rev_new_str);
  // compare new, reversed string to original string

  if (new_str === rev_new_str){  
    return true;
  }
  else {
    return false;
  }
  // return true or false based on results
}

// console.log(isPalindrome("a x a"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("Dud"))
console.log(isPalindrome("oho!"))



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

function longestPalindromicSubstring(str) {}
