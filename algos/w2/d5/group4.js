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
  if(s1.length != s2.length) return false;

  arry1 = s1.toLowerCase().split('')
  arry2 = s2.toLowerCase().split('')

  for(var k = 0; k < arry1.length; k++){
      for(var h = 0; h < arry2.length;h++) {
          if(arry1[k] == arry2[h]){
              arry2.splice(h,1)
              break;
          }
      }
  }
  return arry2.length == 0
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
  var i = 0;
  while(str[i] == ' '){
      i++;
  }
  var j = str.length-1
  while(str[j] == ' '){
      j--
  }
  return str.substring(i,j+1)
}
console.log(trim(str5))
