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
    reverse_str = str.split("").reverse().join("");
    return str == reverse_str;
}


console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));

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
maxp = '';
if(isPalindrome(str) != true){
    for(i = 0; i < str.length;i++){
        //subs = str1.substr(i, str1.length)
        //for(j=subs.length; j>=0;j--)
        //{
        //  subs_subs_tr = subs.substr(0,j);
        //  if(subs_subs_str.length <= 1)
        //  continue;
        //}
        if(str[i-1-j] == str[i+1+j]){
            for(var j = 0;j<str.length;j++){
            
            }
        }
    }
}
return str;
}

function longestPalindromicSubstring(str) {

    var rev = [];
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log(rev)
    for(i = 0; i < str.length; i++) {
        for(u= 0; u<str.length; u++) {
            tempstr = 0;
            if(str[i] == rev[u]) {
            tempstr += rev[u];
        }
        rev += tempstr;
        }
    }
}
console.log(longestPalindromicSubstring(str1))