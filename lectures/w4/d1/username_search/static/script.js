var username = "";

function setUsername(e) {
  username = e.value;
}

// function handleSubmit() {
//   fetch(`/search?username=${username}`)
//     .then(function (res) {
//       return res.text();
//     })
//     .then(function (data) {
//       document.getElementById("display").innerHTML = data;
//     });
// }

function handleSubmit() {
  fetch(`/search?username=${username}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username }),
  })
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("display").innerHTML = data;
    });
}
