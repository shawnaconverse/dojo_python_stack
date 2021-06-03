var username = "";

function setUsername(e) {
  // e holds the data from the input tag
  username = e.value;
  console.log(username);
}

function handleSubmit() {
  // XMLHttpRequest tool to make requests from pure Javascript
  // use fetch function in JS ES6
  fetch(`https://api.github.com/users/${username}`)
    // fetch returns a Promise
    // fetch("https://pokeapi.co/api/v2/berry/1/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if ("message" in data) {
        document.getElementById(
          "display"
        ).innerHTML = `<h2>User Not Found</h2>`;
      } else {
        // back ticks allow for multiline strings
        let html = `
        <img src=${data["avatar_url"]} />
        <p>Name: ${data["name"]}</p>
        <p>Number of Public repos: ${data["public_repos"]}</p>
      `;
        document.getElementById("display").innerHTML = html;
      }
    });
}
