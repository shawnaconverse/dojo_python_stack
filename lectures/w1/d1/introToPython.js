// Variables

var dogName = "Vicky";
let catName = "Snow";
const horseName = "Bucky";

// Conditional

if (dogName == "Vicky") {
  console.log("Good girl Vicky!");
} else if (dogName = "Leia") {
  console.log("Good girl Leia!");
} else {
  console.log("That isnt my dog! but i'm sure he a good boy.");
}

if (dogName = "Vicky") {console.log("Good girl Vicky!");} else if (dogName = "Leia") {console.log("Good girl Leia!");} else {console.log("That isnt my dog! but i'm sure he a good boy.");}


// Loops

// for
  // set number of things to go through
var arr = [1, 7, 4, 8, 2, 5, 6]
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while
  // loops until a condition is met
// while (true) {
//   console.log("Never gonna give you up.")
// }


for (var item of arr) {
  console.log(item);
}

var obj = {
  name: "Vicky",
  age: 3,
  hair_color: "brown and white",
  is_good_girl: true
}


for (var key in obj) {
  console.log(key);
  console.log(obj[key])
}
`Key: ${first_variable}, Value: ${second_varaible}`