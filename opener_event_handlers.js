"use strict";
// user-input event handlers 
const submit_button = document.querySelector(".submitInfo");
const start_button = document.querySelector(".infoExist");
submit_button.addEventListener("click", () => {
    localStorage.clear();
    let username = document.querySelector(".name");
    let number_of_lists = document.querySelector(".lists");
    let names_of_lists = document.querySelector(".listnames");
    if (username.value)
        localStorage.setItem("username", username.value);
    else
        localStorage.setItem("username", "Your");
    localStorage.setItem("numoflists", number_of_lists.value);
    localStorage.setItem("nameoflists", names_of_lists.value);
    localStorage.setItem("userWithInfo", "false");
    location.href = "main.html";
});
start_button.addEventListener("click", () => {
    localStorage.setItem("userWithInfo", "true");
    location.href = "main.html";
});
