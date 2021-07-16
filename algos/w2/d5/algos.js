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
  if (s1.length !== s2.length) return false;

  // frequency tables
  const s1CharFreq = {};
  const s2CharFreq = {};

  for (let i = 0; i < s1.length; i++) {
    const s1CharUpper = s1[i].toUpperCase();
    const s2CharUpper = s2[i].toUpperCase();

    if (s1CharFreq.hasOwnProperty(s1CharUpper)) {
      s1CharFreq[s1CharUpper]++;
    } else {
      s1CharFreq[s1CharUpper] = 1;
    }

    if (s2CharFreq.hasOwnProperty(s2CharUpper)) {
      s2CharFreq[s2CharUpper]++;
    } else {
      s2CharFreq[s2CharUpper] = 1;
    }
  }

  // compare both tables for same chars and same frequency
  for (const char in s1CharFreq) {
    if (!s2.hasOwnProperty(char)) return false;

    if (s1CharFreq[char] !== s2CharFreq[char]) return false;
  }

  return true;
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
  let startIdx = 0;
  let endIdx = str.length - 1;

  while (str[startIdx] == " ") {
    startIdx++;
  }

  while (str[endIdx] == " ") {
    endIdx--;
  }

  return str.slice(startIdx, endIdx + 1);
}
