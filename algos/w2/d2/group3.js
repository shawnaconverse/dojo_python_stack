const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function frequencyTableBuilder(arr) {
    // SETUP
    var table = {};
    // WORK
    for (var i = 0; i < arr.length; i++) {
        if(table.hasOwnProperty(arr[i])) {
            table[arr[i]]++;
        }
        else{
            table[arr[i]] = 1;
        }
    }
    // RETURN
    return table
}

console.log(frequencyTableBuilder(arr3))

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
// const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
  var words = [];
  var length = str.length;

  for (let i = 0; i  ) {
    words = 


  }
}
