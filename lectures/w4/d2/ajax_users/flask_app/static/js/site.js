// function getUsers() {
//   fetch("http://localhost:5000/users")
//     .then((res) => res.json())
//     .then((data) => {
//       var users = document.getElementById("users");
//       for (let i = 0; i < data.length; i++) {
//         let row = document.createElement("tr");

//         let name = document.createElement("td");
//         name.innerHTML = data[i].user_name;
//         row.appendChild(name);

//         let email = document.createElement("td");
//         email.innerHTML = data[i].email;
//         row.appendChild(email);
//         users.appendChild(row);
//       }
//     });
// }
// getUsers();

function getUsers() {
  console.log("Hello there");
  fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var users = document.getElementById("users");
      for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.innerHTML = data[i].username;
        row.appendChild(name);

        let email = document.createElement("td");
        email.innerHTML = data[i].email;
        row.appendChild(email);

        users.appendChild(row);
      }
    })
    .catch((err) => console.log(err));
}

getUsers();

// var myForm = document.getElementById("myForm");

const handleSubmit = (e) => {
  // "e" parameter holds the event when we submit the form
  // e.preventDefault() to stop the form from submitting and refreshing the page
  console.log(e);

  var form = new FormData(e);

  fetch("http://localhost:5000/create/user", { method: "POST", body: form })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("users").innerHTML = ""
      getUsers();
    });
};
