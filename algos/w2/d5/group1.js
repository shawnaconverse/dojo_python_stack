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

function frequencyTableBuilder(arr) {
  const result = {}

  for (let i = 0; i < arr.length; i++){
      if (result.hasOwnProperty(arr[i])){
          result[arr[i]]++;
      }
      else{
          result[arr[i]] = 1;
      }
  
  }

  return result
}

function isAnagram(s1, s2) {
  if (s1.length != s2.length){
    return false;
  }
  s1.toLowercase();
  s2.toLowercase();

  dict1 = frequencyTableBuilder(s1.split(""))
  dict2 = frequencyTableBuilder(s2.split(""))
    
  for (let i = 0; i < s1.length; i++){
    if (dict1[s1[i]] != dict2[s1[i]]){
      return false
    }
  }
  return true
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
  let start
  let end

  for (let i = 0; i < str.length; i++){
    if (str[i] != " "){
      start = i;
    }
  }
  for (let y = str.length - 1; y >= 0; y--){
    if (str[y] != " "){
      end = y;
    }
  }

  return str.substring(start + 1, end)
}
