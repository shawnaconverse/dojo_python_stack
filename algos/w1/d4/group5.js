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

function isPalindrome( str ) {
    var splitstring = str.split( "" );
    var reversearr = splitstring.reverse();
    var joinArray = reversearr.join( "" )
  if (joinArray == splitstring) {
    return true;
  }else{
    return false;
  }
}
isPalindrome( str1 );

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

function isPalindrome( str ) {
    var splitstring = str.split( "" );
    console.log( splitstring );
    //var reversearr = splitstring.reverse();
    //console.log( reversearr );
    for ( var i = 0; i < str.length; i++ ) {
        var buff = [];
        buff.push( splitstring[ i ] );
        for ( var j = i + 1; j < str.length; j++ ) {
            buff.push( splitstring[ j ] );
          console.log(buff)
          var reversearr = buff.reverse()
          if (buff == reversearr) {
            console.log(buff)
          }
        }
    }
    //var joinArray = reversearr.join( "" )
    //console.log( joinArray )
}
isPalindrome( str1 );
