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
  for (var i = 0; i < str.length/2; i++){
    if (str[i] != str[str.length-1-i]){
      return false
    }
  }
  return true
}

/*****************************************************************************/

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

function longestPalindromicSubstring(str) {
  var temp = "";
  var tempAnswer = null
  for (var j = 0; j < str.length; j++){
      for (var i = str.length-1; i > j; i--){
          if (str[j] == str[i]){
              for (var k = j; k <= i; k++){
                  temp += str[k]
                  tempAnswer = isPalindrome(temp)
                  console.log("here is temp:", temp)
              }
              if (tempAnswer == true){
                  console.log("here")
                  return temp
              }
              // tempAnswer = isPalindrome(temp)
              console.log(tempAnswer)
          }
      }
      temp = ""
  }
  return temp  
} 

const str1 = "what up, daddy-o?";
const expected1 = "dad";
console.log(longestPalindromicSubstring(str1))

const str2 = "uh, not much";
const expected2 = "u";
console.log(longestPalindromicSubstring(str2))

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";
console.log(longestPalindromicSubstring(str3))
