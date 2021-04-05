// var name = "Shawn";

// // CamelCase
// var firstName = "Shawn";
// var lastName = "Converse";

// // Array
// var arr = [0, 1, 2, 3];

// arr.push(4);

// // Object
// // Unordered - NonIndexed collection
// // Key - Value pairs   /  Name - Value pairs
// var obj = {
//   name: "Shawn Converse",
//   age: 27,
// };

// console.log(obj.name);
// console.log(obj["name"]);

// // COnditionals
// if (age > 13) {
//   console.log("You are old enough");
// } else if (age > 2) {
//   console.log("You are quite young");
// } else {
//   console.log("How are you using a computer")
// }

var num = 45;

console.log("Age: " + num); // auto convert int to string

for (var i = 0; i < 100; i++) {
  // console.log(i);
}

var dogs = ["vicky", "shiro", "fudge", "bosco", "rover"];

for (var i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

for (var dog of dogs) {
  console.log(dog);
}
