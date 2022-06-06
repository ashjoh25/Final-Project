"use strict";
const taskObject = new taskManager();
const listObject = new listManager();
const masterList = document.querySelector(".masterList");
const list_container = document.querySelector(".list_container");
listObject.setUsername();
listObject.loadLists(list_container);
const addTaskbutton = document.querySelector(".addTask");
addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput");
    taskObject.addtoMaster(taskInput.value, masterList);
});
