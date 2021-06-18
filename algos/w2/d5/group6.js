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
  if(s1.length !== s2.length){
    return false
  }
  for (var i = 0; i < s1.length; i++){
      for (var j = 0; j < s2.length; j++){
        if(s1[i].toLowerCase()==s2[j].toLowerCase()){
          break;
        }
        if(s1[i].toLowerCase()!=s2[j].toLowerCase() && j==s2.length){
          return false;
        }
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
  let pos1 = str[0];
  let pos2 = str[str.length-1];


  for(var i = 0; i<str.length;i++){
    if(str[i] != " "){
      pos1 = i;
      break;
    }
  }

  for(var j =str.length-1;j>=0;j--){
    if(str[j] != " "){
      pos2 = j+1;
      break;
    }
  }

  return str.slice(pos1,pos2)
}

function trim(str) {
  let pos1 = 0;
  let pos2 = str.length-1;
  while(true){
      if(str[pos1] == " "){
        pos1+=1;
      }
      if(str[pos2] == " "){
        pos2 -= 1;
      }
      if(str[pos1] != " " && str[pos2] != " "){
      break;
      }
  }
  return str.slice(pos1,pos2+1)
}

trim(str1)