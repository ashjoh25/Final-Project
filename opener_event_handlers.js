"use strict";
// event handlers for the opening page that the user sees first 
// selecting the buttons from the page
const submit_button = document.querySelector(".submitInfo");
const login_button = document.querySelector(".infoExist");
// adding event listeners to each button to listen for when user clicks on them
submit_button.addEventListener("click", () => {
    // clearing local storage --> submit button means new user / no info stored / starting fresh
    localStorage.clear();
    // selecting the user input elements from the page 
    let username = document.querySelector(".name");
    let number_of_lists = document.querySelector(".lists");
    let names_of_lists = document.querySelector(".listnames");
    // checking if user typed in a name 
    if (username.value) {
        localStorage.setItem("username", username.value);
    }
    else {
        localStorage.setItem("username", "Your");
    }
    ;
    localStorage.setItem("numoflists", number_of_lists.value);
    localStorage.setItem("nameoflists", names_of_lists.value);
    // user has no stored info --> no need to load any data from local storage (such as tasks)
    localStorage.setItem("userWithInfo", "false");
    // take user to the next main page with the task manager 
    location.href = "main.html";
});
login_button.addEventListener("click", () => {
    // user has stored info --> need to load data (regarding tasks) from local storage
    localStorage.setItem("userWithInfo", "true");
    location.href = "main.html";
});
