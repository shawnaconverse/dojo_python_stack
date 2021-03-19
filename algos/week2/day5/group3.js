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
    
    freqTable = {};
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();
    for(var i = 0; i < s1.length; i++)
    {
        var str =s1[i];
        if(freqTable.hasOwnProperty(str) == false)
        {
            freqTable[str] = 1;
        }
        else
        {
            freqTable[str]++;
        }
    }
    if( s1.length == s2.length)
    {
        for(var j = 0; j < s2.length; j++)
        {
            var str =s2[j];
            if(freqTable.hasOwnProperty(str) == false)
            {
                return false;
            }
            else
            {
                freqTable[str]++;
            }
        }
        return true;
    }
    return false;
}
    // if (freqTable.length !== freqTable2.length) {
    //     return false
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
    return str.split(' ').slice(' ').join(' ')
}

function trim(str) 
{
    new_str = "";
    for(i = 0; i < str.length; i++)
    {
        if(str[i] != " ")
        {
            new_str += str[i]
        }
    }
    return new_str;
}