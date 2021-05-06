/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
// const expected1 = true;

const str2 = "racecar";
// const expected2 = true;

const str3 = "Dud";
// const expected3 = false;

const str4 = "oho!";
// const expected4 = false;

function isPalindrome(str) {
  var reverseStr = ""
  // loop through the string
  for (var x in str) { 
    // console.log(str[x])

    // build the reverse string
    for (var y=str.length-1; y >= 0; y--) {
      //console.log(str.length)
      reverseStr += str[y]
      //console.log(reverseStr)
    }
  // compare str to reverseStr
  return str == reverseStr;
  }
}

isPalindrome(str3)

function isAPalindrome(word) {
  var reversestr = word.split('').reverse().join('')
  return reversestr == word
}

console.log(isAPalindrome(str3))

/*****************************************************************************/

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

const str1 = "what up, daddy-o?";
// const expected1 = "dad";

const str2 = "uh, not much";
// const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";

function longest_palindrome(str1) {

  var largest = 0,
  largestPalindrome = str1[0];

  for (var i = 0; i < str1.length; i++) {
      var subString = str1.substring(i, str1.length);

      for (var j = subString.length; j >= 0; j--) {
          var subString2 = subString.substring(0, j);
          if (subString2.length <= 1)
              continue;            

          if (isAPalindrome(subString2)) {
              if (subString2.length > largest) {
                  largest = subString2.length;
                  largestPalindrome = subString2;
              }
          }
      }
  }

  return largestPalindrome;
}

console.log(longest_palindrome(str5));
console.log(longest_palindrome(str6));
console.log(longest_palindrome(str7));