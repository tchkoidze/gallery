"use strict mode";

window.onload = function(){

  const submitButton = document.getElementById("submit");
  const loginInput = document.getElementById("login");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const login = loginInput.value;
  
    let apiUrl = `https://api.github.com/users/${login}/followers`;
    fetch(apiUrl).then((response) => {
      response.json().then((users) => {
        console.log(users);
  
        const userListElement = document.getElementById("users-list");
        let userListTemplate = "";
        users.map((user) => {
          userListTemplate += `<li> <img src=${user.avatar_url}> ${user.login} </li>`;
        });
        userListElement.innerHTML = userListTemplate;
      });
    });
  });
}
