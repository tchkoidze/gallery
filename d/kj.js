"use strict mode";
// const submitButton = document.getElementById("submit");
// const loginInput = document.getElementById("login");
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const login = loginInput.value;
//   fetchUserFollowers(login);
// });

// const fetchUserFollowers = (login) => {
//   let apiUrl = `https://api.github.com/users/${login}/followers`;
//   fetch(apiUrl).then((response) => {
//     response.json().then((users) => {
//       console.log(users);

//       const userListElement = document.getElementById("users-list");
//       let userListTemplate = "";
//       users.map((user) => {
//         userListTemplate += `<li> <img src=${user.avatar_url}> ${user.login} </li>`;
//       });
//       userListElement.innerHTML = userListTemplate;
//     });
//   });
// };

const submitButton = document.getElementById("submit");
const loginInput = document.getElementById("login");
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const login = loginInput.value;
  const users =   fetchUserFollowers(login);
  console.log(users);

  const userListElement = document.getElementById("users-list");
      let userListTemplate = "";
      users.map((user) => {
        userListTemplate += `<li> <img src=${user.avatar_url}> ${user.login} </li>`;
      });
      userListElement.innerHTML = userListTemplate;
});

const fetchUserFollowers = async (login) => {
  let apiUrl = `https://api.github.com/users/${login}/followers`;
  
  let response = await fetch(apiUrl);
  let json= response.json();

  return json;

  // return fetch(apiUrl).then((response) => {
  //   response.json().then((users) => {
  //     return users;
  //     console.log(users);

      
  //   });
  // });
};



