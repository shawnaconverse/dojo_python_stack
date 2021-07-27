var username = "";
var email = "";

function setUsername(e) {
  username = e.value;
}

function setEmail(e) {
  email = e.value;
}

function getUsers() {
  fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var users = document.getElementById("users");
      users.innerHTML = "";
      for (const user of data) {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.innerHTML = user.username;
        row.appendChild(name);

        let email = document.createElement("td");
        email.innerHTML = user.email;
        row.appendChild(email);

        users.appendChild(row);
      }
    })
    .catch((err) => console.log(err))
}

getUsers();

function handleSubmit() {
  options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
    }),
  };

  fetch("http://localhost:5000/users/create", options)
    .then((res) => res.json())
    .then((data) => {
      !data.error_message ? getUsers() : console.error(data.error_message)
    })
    .catch((err) => console.log(err));
}
