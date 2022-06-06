"use strict";
// user-input event handlers 
const submitButton = document.querySelector(".submitInfo");
const startButton = document.querySelector(".infoExist");
submitButton.addEventListener("click", () => {
    let username = document.querySelector(".name");
    let numberoflists = document.querySelector(".lists");
    let namesoflists = document.querySelector(".listnames");
    if (username.value)
        localStorage.setItem("username", username.value);
    else
        localStorage.setItem("username", "Your");
    localStorage.setItem("numoflists", numberoflists.value);
    localStorage.setItem("nameoflists", namesoflists.value);
    location.href = "main.html";
});
startButton.addEventListener("click", () => {
    location.href = "main.html";
});
document.addEventListener("mousedown", function (event) {
});
