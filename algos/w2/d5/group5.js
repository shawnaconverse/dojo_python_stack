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
  let dic1 = {};
  let dic2 = {};
  
  for(let i = 0; i < s1.length; i++){
     let c = s1[i].toLowerCase();
    if (dic1[c]){
      dic1[c]++;
    } else dic1[c] = 1;
  }

  for(let j = 0; j <s2.length; j++){
    let c = s2[j].toLowerCase();
    if (dic2[c]){
      dic2[c]++;
    }
    else dic2[c] = 1;
  }
  
  let keys = Object.keys(dic2)
  for(let key in keys){
    if(dic2[key] != dic1[key]){
      return false;
    }
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
  arr1 = []
  arr1 = str.split("")
  for(let i = 0; i <arr.length; i++){
    if(arr[i] != " "){
      break;
    }
    else arr1.shift();
  }
  for(let j = arr1.length-1; j >= 0; j--){
    if(arr[j] != " "){
      break;
    }
    else arr1.pop();
  }
  return arr1.join("");
}
