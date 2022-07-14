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
    user_task_input.value = "";
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
    user_list_input.value = "";
});
const clear_tasks_button = document.querySelector("#clearAll");
clear_tasks_button.addEventListener("click", () => {
    taskObject.clearAllStorage();
    taskObject.clearDisplay();
});
const change_listname_button = document.querySelector("#changeListName");
change_listname_button.addEventListener("click", () => {
    let list_name_input = document.querySelector(".listNameInput");
    if (!list_name_input.value) { // checking if user did not type anything
        return;
    }
    else {
        listObject.changeListName(list_name_input.value);
        listObject.loadListsTasks(taskObject);
    }
    ;
    list_name_input.value = "";
});
const save_button = document.querySelector("#save");
save_button.addEventListener("click", () => {
    taskObject.updateLocal();
});
const help_button = document.querySelector("#help");
help_button.addEventListener("click", () => {
    location.href = "help.html";
});
document.querySelectorAll(".taskLabel").forEach(function (task_elm) {
    task_elm.addEventListener("click", (event) => {
        if (event.shiftKey === true) {
            taskObject.removeTask(event.target);
        }
        ;
    });
});
document.querySelectorAll(".slot").forEach(function (list_elm) {
    list_elm.addEventListener("click", (event) => {
        if (event.shiftKey === true) {
            listObject.removeList(event.target);
            taskObject.updateLocal();
            listObject.clearDisplay();
            listObject.loadLists();
            listObject.loadListsTasks(taskObject);
        }
        ;
    });
});
document.querySelectorAll("h4").forEach(function (elm) {
    elm.addEventListener("click", (event) => {
        if (event.shiftKey === true) {
            return;
        }
        ;
    });
});
// beginning of dragging code
let dragged = null;
document.addEventListener("dragstart", dragStart);
function dragStart(event) {
    dragged = event.target;
}
;
const boxes = document.querySelectorAll(".list_container");
const moreboxes = document.querySelectorAll(".masterList");
moreboxes.forEach(masterList => {
    masterList.addEventListener("dragenter", dragEnter);
    masterList.addEventListener("dragover", dragOver);
    masterList.addEventListener("dragleave", dragLeave);
    masterList.addEventListener("drop", drop);
});
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
// end of dragging code
// "autosave" --> every 500 millseconds, updateLocal() is called to save in local storage the current version of the page + its data
setInterval(function () {
    taskObject.updateLocal();
}, 150);
