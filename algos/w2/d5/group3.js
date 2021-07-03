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

function isAnagram(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var s1Dict = {};
  var s2Dict = {};
  for(var i =0; i<s1.length; i++){
    // if s1[i] is a key in dictionary increment it
    if (s1Dict[s1[i]]) {
      s1Dict[s1[i]] = s1Dict[s1[i]]+1
    } else {
      // else means the key is not in the dictionary
      // make a key value pair
      s1Dict[s1[i]] = 1
    }
  }
  for(var i =0; i<s2.length; i++){
    // if s1[i] is a key in dictionary increment it
    if (s2Dict[s2[i]]) {
      s2Dict[s2[i]] = s2Dict[s2[i]]+1
    } else {4
      // else means the key is not in the dictionary
      // make a key value pair
      s2Dict[s2[i]] = 1
    }
  }
  // where we check if both objects carry the same letters
  // DOES NOT WORK IN JS...
  if (s1Dict==s2Dict) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram(strA1, strA1));
console.log(isAnagram(strA2, strA2));
console.log(isAnagram(strA3, strA3));
console.log(isAnagram(strA4, strA4));


/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
  
}
