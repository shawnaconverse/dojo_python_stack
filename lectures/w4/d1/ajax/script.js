// console.log("hello there")

var pokeName = "";

function setPokeName(event) {
  pokeName = event.value;
  // console.log(pokeName);
}

function handleSubmit() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      var html = `
      <img src="${data.sprites.front_default}" alt="">
      <p>Name: ${data.name}</p>
      <p>Types: ${data.types[0].type.name}</p>
      `;
      document.getElementById("display").innerHTML = html;
    });
}

// Promise
// JS API called fetch
// asynchronous code

// console.log("this console log is after the fetch")

// function thisIsAFunction() {}

// const anonFunciton1 = function(thing) {
//   console.log(thing)
// }

// const anonFunction2 = (thing) => {
//   console.log(thing)
// }
