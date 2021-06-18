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
  if (s1.length != s2.length) {
    return false;
  } else {
    let s1Dict = {};
    let s2Dict = {};
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    for (let i = 0; i < s1.length; i++){
      if (!s1Dict[s1[i]]) {
        s1Dict[s1[i]] = 1;
      } else {
        s1Dict[s1[i]] += 1;
      }
      
      if (!s2Dict[s2[i]]) {
        s2Dict[s2[i]] = 1;
      } else {
        s2Dict[s2[i]] += 1;
      }
    }
    for (let key in s1Dict) {
      if (s1Dict[key] != s2Dict[key]){
        return false;
      }
    }
    return true;
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
  let trim = "";
  let start = 0;
  let end = str.length-1;
  if (str[0] === " "){
    let i = 0;
    while(str[i] === " "){
      i++;
    }
    start = i;
  }
  if (str[str.length - 1] === " ") {
    let i = str.length - 1;
    while(str[i] === " "){
      i--;
    }
    end = i;
  }
  for (let i = start; i <= end; i++) {
    trim += str[i];
  }
  return trim;
}


function trim(str) {
  let result = '';
  let i = 0;
  while(str[i] == " ") {
      i++;
  }
  let start = i;
  i = str.length - 1;
  while(str[i] == ' ') {
      i--;
  }
  let end = i;
  for(let j = start; j <= end; j++) {
      result += str[j];
  }
  return result;
}