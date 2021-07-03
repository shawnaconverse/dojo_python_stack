/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

function isAnagram(str1, str2) {
  var newStr = " "
  var str1 = str1.toLowerCase()
  var str2 = str2.toLowerCase()
  if (str1.length != str2.length){
    return false
  }
  for ( let i = 0; i < str1.length; i++){
    
  }
  
}
// --------------NEW OPTION--------------

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

function isAnagram(s1, s2) {
  var str1 = s1.toLowerCase()
  var str2 = s2.toLowerCase()

  if (str1.length !== str2.length){
    return false
  }

  str1.split('').sort().join('');
  str2.split('').sort().join('');

  return str1 === str2;
}

console.log(isAnagram(strA1, strB1))




/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {}
