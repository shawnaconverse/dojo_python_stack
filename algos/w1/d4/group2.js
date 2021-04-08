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
  let reverseString = ""
  for (let i = str.length -1; i >= 0; i--){
    reverseString += str[i] 
  } 
  return (reverseString === str)
}

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))

//parse original string going backwards


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

function isPalindrome(str) {
  let reverseString = ""
  for (let i = str.length -1; i >= 0; i--){
    reverseString += str[i]
  } 
  return (reverseString === str)
}

function longestPalindromicSubstring(str) {
  let palindromeArray=[]
  for (let i = 0; i < str.length ;i++){
    let testString = ""
    for (let j = i; j < str.length; j++){
      testString += str[j]
      if (isPalindrome(testString)){
        palindromeArray.push(testString)
      }
    }
  }
  let palindromeLongest = ""
  for (let i = 0; i < palindromeArray;i++){
    if (palindromeArray[i].length > palindromeLongest){
      palindromeLongest = palindromeArray[i]
    }
  }
  return palindromeLongest
}

console.log(longestPalindromicSubstring(str1))
console.log(longestPalindromicSubstring(str2))
console.log(longestPalindromicSubstring(str3))


  //variable to store a test substring
  //for loop to iterate through each value of the function
  //for loop nested inside that adds each additional character after i, one at a time
  //call our ispalindrome function
  //if it returns true, store that palindrome in a array of all found palindromes
  //close all for loops
  //compare the length of each palindrome returned with another for loop
  //return the longest