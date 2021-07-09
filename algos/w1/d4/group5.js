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
  //frist line should be  commented for longestPalindromicSubstring(str2)
  //if(str.length <2) return false; 
  for(var i = 0; i<str.length/2; i++){
      if(str[i]!=str[str.length-i-1])
        return false;

  }
  return true;
}

function palindrome(str){
  for (var i = 0; str,length -1 > i; i++){
    if(str[i] != str[str.length -1 -i]) return false;
}
return true;
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
  palins = [];
    if(str.length <1) return "";
    if(str.length == 1) return str;
    for(var i = 0; i<str.length; i++){
        for(var j = i+1; j<str.length; j++){
            //console.log(str.substring(i,j))
            if(isPalindrome(str.substring(i,j)))
            {
                palins.push(str.substring(i,j));
                //console.log("yes");
            }
        }
    }
    //console.log(palins)
    var longest = palins[0]
    for(var i = 1; i<palins.length;i++){
        if(palins[i].length>longest.length)
            longest = palins[i];
    }
    return longest;
}
