"use strict";
// user-input event handlers 
const username = document.querySelector("name");
const masterList = document.querySelector(".masterList");
const taskObject = new Task(masterList);
let numberoflists = document.querySelector("lists");
let namesoflists = document.querySelector("listnames");
let taskInput = document.querySelector(".taskInput");
let user = username.value;
let numoflists = Number(numberoflists.value);
let listnames = namesoflists.value;
let addTaskbutton = document.querySelector(".addTask");
addTaskbutton.addEventListener("click", () => {
    taskObject.addtoMaster(taskInput.value);
});
