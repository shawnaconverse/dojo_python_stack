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
    var newstring = "";
    for (var i = str.length - 1; i >=0; i--){
        newstring += str[i];
    }
    if (newstring==str){
        return true;
    } else return false;
}
;

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));


/*****************************************************************************/


/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. 
    Return the longest palindromic substring. 
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
    var newstring = "";
    for (var i = str.length - 1; i >= 0; i--){
        newstring += str[i];
    }
    if (newstring==str){
        console.log(newstring);
    } else 
}





// A Java solution for longest palindrome
import java.util.*;
 
class GFG{
 
// Function to print a subString str[low..high]
static void printSubStr(String str, int low, int high)
{
    for (int i = low; i <= high; ++i)
        System.out.print(str.charAt(i));
}
 
// This function prints the
// longest palindrome subString
// It also returns the length
// of the longest palindrome
static int longestPalSubstr(String str)
{
    // get length of input String
    int n = str.length();
 
    // All subStrings of length 1
    // are palindromes
    int maxLength = 1, start = 0;
 
    // Nested loop to mark start and end index
    for (int i = 0; i < str.length(); i++) {
        for (int j = i; j < str.length(); j++) {
            int flag = 1;
 
            // Check palindrome
            for (int k = 0; k < (j - i + 1) / 2; k++)
                if (str.charAt(i + k) != str.charAt(j - k))
                    flag = 0;
 
            // Palindrome
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
 
    System.out.print("Longest palindrome subString is: ");
    printSubStr(str, start, start + maxLength - 1);