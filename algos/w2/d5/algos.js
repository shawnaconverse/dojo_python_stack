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

  // create frequency tables
  var s1CharFreq = {};
  var s2CharFreq = {};

  for (var i = 0; i < s1.length; i++) {
    var s1Char = s1[i].toUpperCase();
    var s2Char = s2[i].toUpperCase();

    if (s1CharFreq.hasOwnProperty(s1Char)) {
      s1CharFreq[s1Char]++;
    } else {
      s1CharFreq[s1Char] = 1;
    }

    if (s2CharFreq.hasOwnProperty(s2Char)) {
      s2CharFreq[s2Char]++;
    } else {
      s2CharFreq[s2Char] = 1;
    }
  }

  for (var char in s1CharFreq) {
    if (!s2CharFreq.hasOwnProperty(char)) return false;

    if (s1CharFreq[char] !== s2CharFreq[char]) return false;
  }
  return true;
}

function isAnagramOneLIne(s1, s2) {
  return (
    s1.toLowerCase().split("").sort().join("") ===
    s2.toLowerCase().split("").sort().join("")
  );
}

// function isAnagram(s1, s2) {
//   const arr1 = s1.toLowerCase().split('');
//   const alpha = arr1.sort();
//   var alpha2 = arr1.join();
//   const arr2 = s2.toLowerCase().split('');
//   const bravo = arr2.sort();
//   var bravo2 = arr2.join();
//   if(alpha2 != bravo2){
//   console.log(alpha2,"|compared to|",bravo2)
//       return false;
//   }
//   else{
//       return true;
//   }
// }

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
  var startIdx = 0;
  var endIdx = str.length - 1;

  while (str[startIdx] == " ") {
    startIdx++;
  }

  while (str[endIdx] == " ") {
    endIdx--;
  }

  return str.slice(startIdx, endIdx + 1)
}
