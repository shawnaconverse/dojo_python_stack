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

  function createCharMap(text) {
      let charMap = {}

      for (let char of text) {
          if (charMap.hasOwnProperty(char)) {
              charMap[char]++
          } else {
              charMap[char] = 1
          }
      }
      return charMap
  }
  if (s1.length === s2.length) {
      let s1Map = createCharMap(s1)
      let s2Map = createCharMap(s2)
      for (let char in s1Map) {
          if (s1Map[char] !== s2Map[char]) {
              return false
          }
      }
      return true
  } else {
      return false
  }
}console.log (isAnagram("yes", "eys"));

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {}
