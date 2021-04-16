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

const strA4 = "silentt";
const strB4 = "listen";
const expected4 = false;

//solution 1:

function isAnagram(s1, s2) {
  const arr1 = s1.toLowerCase().split('');
  const alpha = arr1.sort();
  var alpha2 = arr1.join();
  const arr2 = s2.toLowerCase().split('');
  const bravo = arr2.sort();
  var bravo2 = arr2.join();
  if(alpha2 != bravo2){
  console.log(alpha2,"|compared to|",bravo2)
      return false;
  }
  else{
      return true;
  }
}
console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));


//solution 2:

//check length, if different, return false
//iterate through strA1, build a frequency dictionary
//iterate through strB1, build a frequency dictionary
//Iterate through strA1 frequency dictionary, see if key exists in strB2, if so, see if frequency is the same.
//if in any case not true, return false.
//if true in all cases, return true.

function frequencyTableBuilder(arr) {
  frequencyDict = {}
  for (let i = 0; i < arr.length ;i++){
    if (frequencyDict.hasOwnProperty(arr[i])){
      frequencyDict[arr[i]]++
    }
    else{
      frequencyDict[arr[i]] = 1
    }
  }
  return frequencyDict
}


function isAnagramButLong(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }else{
    s1 = s1.toUpperCase()
    s2 = s2.toUpperCase()
    let frequencyDicts1 = frequencyTableBuilder(s1)
    let frequencyDicts2 = frequencyTableBuilder(s2)
    for (let s1Key in frequencyDicts1){
      let existsFlag = false
      for (let s2Key in frequencyDicts2){
        if (s1Key === s2Key){
          existsFlag = true
          if (frequencyDicts1[s1Key] != frequencyDicts1[s1Key]){
            return false
          }
        }
      }
      if (existsFlag == false){
        return false
      }
    }
  }
  return true
}

console.log(isAnagram(strA1,strB1))
console.log(isAnagram(strA2,strB2))
console.log(isAnagram(strA3,strB3))
console.log(isAnagram(strA4,strB4))

// solution 3:

function isAnagram(s1, s2) {
  answer = '';
  if(s1.length != s2.length) {
    return false;
  }
  else {  
    for(i = 0; i < s1.length; i++) {
      for(j = 0; j < s2.length; j++) {
        if(s1[i] == s2[j]){
          answer = true;
          break;
        }
        else {
          answer = false;
        }
      }
    }
  }
  return answer;
}
console.log(isAnagram(strA1, strB1));
console.log(isAnagram(strA2, strB2));
console.log(isAnagram(strA3, strB3));
console.log(isAnagram(strA4, strB4));


/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello world thomas     ";
const expected2 = "hello world thomas";

const str3 = "   hello world      thomas     ";
const expected3 = "hello world thomas";

function trim(str) {
    finalString = ""
    strArray = str.split(" ")
    for (let i = 0; i < strArray.length; i++){
        if (strArray[i] != ""){
            finalString += strArray[i]
            let blankFlag = false
            for (let j=i; j < strArray.length ;j++){
                if (strArray[j] != ""){
                    blankFlag = true
                    break
                }
            }
            if (blankFlag == true){
                finalString += " "
                blankFlag = false
            }
        }
            
        }
    return finalString
  }
  
  console.log(trim(str1))
  console.log(trim(str2))
  console.log(trim(str3))
  