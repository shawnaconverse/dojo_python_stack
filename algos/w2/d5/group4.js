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

const strA5 = "silent";
const strB5 = "lizten";
const expected5 = false;


// Non-Chaos Version ========================================================================
function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;
return s1.toLowerCase().split("").sort().join("") == s2.toLowerCase().split("").sort().join("");
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))
console.log(isAnagram(strA5, strB5))


// CHAOS VERSION ==============================================================================
function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false;

  
  var frequency = {}, frequency2 = {}
    for(var i = 0; i < s1.length; i++) {
      //frequency[s1[i]] = frequency.hasOwnProperty(s1[i])? frequency[s1[i]]+1:0
      if(!frequency.hasOwnProperty(s1[i])) {
        frequency[s1[i]] = 0
      }
      else
        frequency[s1[i]]++;
      if(!frequency2.hasOwnProperty(s2[i])) {
        frequency2[s2[i]] = 0
      }
      else
        frequency2[s2[i]]++
    }
    for(let key in frequency){
      if(frequency[key]!=frequency2[key])
        return false;
    }
    return true;
    
    
    // console.log(frequency)
    // return (frequency+frequency2).hasOwnProperty(frequency2);
}


  
console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))



// check if theyre the same length then check if the first string includes the other with an object

/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
  var a = 0, b = str.length-1;
  for(let i = 0;i<str.length; i++){
      if(str[i]!= " "){
          a = i;
          break;
      }
  }
  for(let i = str.length-1;i>-1; i--){
      if(str[i]!= " "){
          b = i;
          break;
      }
  }
  return str.substring(a,b+1);
}

// check if the space is next to another space if it is strip it
