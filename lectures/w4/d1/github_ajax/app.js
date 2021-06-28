var username = "";

function setUsername(event) {
  username = event.value;
  // console.log(username)
}

async function handleSubmit() {
  // Fetch API
  // Promise
  // send an asynchronus HTTP request and do something when it recieves
  // a response. JS calls a Promise
  // fetch(`https://api.github.com/users/${username}`)
  //   .then(function (response) {
  //     // console.log(response);
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     // console.log(data);
  //     let html = `
  //     <img src=${data["avatar_url"]} />
  //     <p>Full name: ${data.name}</p>
  //     <p>Number of Public repos: ${data['public_repos']}</p>
  //     `
  //     document.getElementById("display").innerHTML = html;
  //   });

  // fetch(`https://api.github.com/users/${username}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let html = `
  //     <img src=${data["avatar_url"]} />
  //     <p>Full name: ${data.name}</p>
  //     <p>Number of Public repos: ${data['public_repos']}</p>
  //     `
  //     document.getElementById("display").innerHTML = html;
  //   })
  //   .catch(err => console.log(err))

  
    var response = await fetch(`https://api.github.com/users/${username}`);
    var data = await response.json();

    console.log(data)
}


// function () {

// }

// // big arrow notation

// () => {

// }
