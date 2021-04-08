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
      for(var i = 0; i < str.length/2; i++){
          if (str[i] != str[str.length-1-i]){
              return false
          }
      }
      return true
  }
  console.log(isPalindrome(str1))
  console.log(isPalindrome(str2))
  console.log(isPalindrome(str3))
  console.log(isPalindrome(str4))

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

function longestPalindrome(str){
  var arr = str.split("");
  var endArr = [];
  for(var i = 0; i < arr.length; i++){
      var temp = arr[i];
      endArr.push(temp);
      for(var j = i + 1; j < arr.length; j++){
          temp += arr[j];
          if(isPalindrome(temp)){
              endArr.push(temp);
          }
      }
  }

  var count = 0;
  var longestPalindrome = "";
  for(var i = 0; i < endArr.length; i++){
      if(count < endArr[i].length){
          longestPalindrome = endArr[i]; 
          count = endArr[i].length;
      }
  }
  return longestPalindrome;
}

console.log(longestPalindrome(str1));
console.log(longestPalindrome(str2));
console.log(longestPalindrome(str3));