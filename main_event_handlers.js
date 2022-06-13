"use strict";
// event handlers for the main page that contains the task manager itself
// sets the "[User]'s Task Manager!" heading on the page
function setUsername() {
    let username = localStorage.getItem("username");
    let username_ele = document.querySelector(".username");
    if (username === "Your") {
        username_ele.textContent = username + " Task Manager!";
    }
    else {
        username_ele.textContent = username + "'s Task Manager!";
    }
    ;
}
;
let dragged = null;
// create a new task object and list object that contain the necessary methods
const taskObject = new taskManager();
const listObject = new listManager();
setUsername();
// calls the method to load and put all the user's lists on the page
listObject.loadLists();
// checks if user has info through local storage, and if so, loads the data stored into the page
if (localStorage.getItem("userWithInfo") === "true") {
    listObject.loadMasterTasks();
    listObject.loadListsTasks(taskObject);
}
;
// a series of selecting one of the buttons on the page and adding an event listener to listen for user's click
// methods are called corresponding to the button / the button's purpose
const add_task_button = document.querySelector("#addTask");
add_task_button.addEventListener("click", () => {
    let user_task_input = document.querySelector(".taskInput");
    if (!user_task_input.value) { // checking if user did not type anything
        return;
    }
    else {
        let master_default = document.querySelector(".master1");
        taskObject.addtoList(user_task_input.value, master_default);
        taskObject.updateLocal();
    }
    ;
});
const add_list_button = document.querySelector("#addList");
add_list_button.addEventListener("click", () => {
    let user_list_input = document.querySelector(".listInput");
    if (!user_list_input.value) {
        return;
    }
    else {
        listObject.addNewlist(user_list_input.value);
        taskObject.updateLocal();
    }
    ;
});
const clear_tasks_button = document.querySelector("#clearAll");
clear_tasks_button.addEventListener("click", () => {
    taskObject.clearAllStorage();
    taskObject.clearDisplay();
});
const change_listname_button = document.querySelector("#changeListName");
change_listname_button.addEventListener("click", () => {
    let listNameInput = document.querySelector(".listNameInput");
    if (!listNameInput.value) { // checking if user did not type anything
        return;
    }
    else {
        listObject.changeListName(listNameInput.value);
        listObject.loadListsTasks(taskObject);
    }
    ;
});
document.querySelectorAll(".taskLabel").forEach(function (task_elm) {
    task_elm.addEventListener("click", (event) => {
        if (event.shiftKey === true) {
            taskObject.removeTask(event.target);
        }
        ;
    });
});
document.addEventListener("dragstart", dragStart);
function dragStart(event) {
    dragged = event.target;
}
;
const list_container = document.querySelector(".list_container");
const boxes = document.querySelectorAll(".list_container");
boxes.forEach(list_container => {
    list_container.addEventListener("dragenter", dragEnter);
    list_container.addEventListener("dragover", dragOver);
    list_container.addEventListener("dragleave", dragLeave);
    list_container.addEventListener("drop", drop);
});
function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add("drag-over");
}
;
function dragOver(event) {
    event.preventDefault();
    event.target.classList.add("drag-over");
}
;
function dragLeave(event) {
    event.target.classList.remove("drag-over");
}
;
function drop(event) {
    event.target.classList.remove("drag-over");
    //add it to drop target
    event.target.appendChild(dragged);
    taskObject.updateLocal();
}
;
// "autosave" --> every 1000 millseconds, updateLocal() is called to save in local storage the current version of the page + its data
setInterval(function () {
    taskObject.updateLocal();
}, 1000);
