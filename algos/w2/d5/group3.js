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
  /* toLowerCase() will convert the string to lower case, split will split the string into an array, 
  sort will sort the letters in asc value, join rebuilds the string */
  var y = s1.toLowerCase().split("").sort().join(""), z = s2.toLowerCase().split("").sort().join("");
  console.log(z === y 
      ? s1 + " and " + s2 + " are anagrams!"
      : s1 + " and " + s2 + " are not anagrams."
  );
}

isAnagram(strA2,strB2)


/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
  /* trim() returns the string w/o extra whaite space */
  console.log(str.trim())
}

function trim2(str) {
  var tempStr = str.split(""), newStr="";
  for (let ctr=0; ctr < str.length; ctr++) {
    if (tempStr[ctr] != " ") {
      newStr += str[ctr]
    }
  }
}

trim(str1);

trim2(str1);


