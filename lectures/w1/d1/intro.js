console.log("hello there")

// VARIABLES
// a way to store a value in memory
var thing = "something goes here"
thing = "something else"

// Camel Case - oneword, everyother word is capitalized
thisIsCamelCase = "sure it is"



// Conditionals
// condition
// if (true)  {
//   // code block
//   // set of code to run if condition is met
// } else if (false) {

// } else {

// }

// == VS ===
// == compares values
// === compares values and types
if ("42" == 42) {
  console.log("monster hunter")
}

// Loops
// for
var arr = ["vicky", "leia", "shiro", "fudge", "phylo"]

// for (var hotdogs = 0; hotdogs < arr.length; hotdogs++) {
//   console.log(arr[hotdogs])
// }

for (const name of arr) {
  console.log(name)
}

// while
var num = 0
while (num < 10) {
  console.log("woof")
  num++;
}
