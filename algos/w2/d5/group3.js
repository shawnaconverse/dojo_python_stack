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
natan
function isAnagram(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  s1Dict = {
    'n':1,
    'a':1,
    't':1,
  
  };
  s2Dict = {};
  for(var i =0; i<s1.length; i++){
    if () {
      s1Dict[s1[i]] = s1Dict[s1[i]]+1
    } else {
      s1Dict[s1[i]] = 1
    }
    
  } 

}


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
