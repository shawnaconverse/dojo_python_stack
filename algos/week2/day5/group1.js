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

// Simons solution in works

function isAnagram1(s1, s2) {
    var freq = {};
    if(s1.length!=s2.length){
        return false;
    }
    for(var i=0; i<s1; i++){
        

    }


}



// function isAnagram(s1, s2) {
    
    
    
//     var words = ["yes", "eys", "no", "noo", "silent", 'listen'];
//     var anagrams = {};

//     for(var i in words) {
//         var word = words[i];

//         var sorted = sortWord(word);

//         if (anagrams[sorted] != null) {
//             anagrams[sorted].push(word);
//         }
//         else {
//             anagrams[sorted] = [ word ];
//         }
//     }

//     for(var sorted in anagrams) {
//         var words = anagrams[sorted];
//         var sep = ",";
//         var out = "";
//         for(var n in words) {
//             out += sep+ words[n];
//             sep = "";
//         }
//     }
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
    //setup
    newStr = '';
    //work
    for(var i =0; i<str.length; i++){
        if (str[i]==' '){
        }
        else {
            newStr+=str[i];
            for (var j=i+1;j<str.length; j++){
                if ( str[j]==' ' && str[j+1]==' ' || j == str.length-1 && str[j] ==' '){
                }
                else{
                    newStr+=str[j];
                }
            }
            //return
            return newStr;
        }
    }
}
console.log(trim(str1));