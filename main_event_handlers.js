"use strict";
const taskObject = new taskManager();
const listObject = new listManager();
const masterList = document.querySelector(".master1");
const list_container = document.querySelector(".list_container");
listObject.setUsername();
listObject.loadListsNames(list_container);
if (localStorage.getItem("userWithInfo") === "true")
    listObject.loadListsTasks(masterList, list_container, taskObject);
const addTaskbutton = document.querySelector(".addTask");
addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput");
    if (!taskInput.value)
        return;
    else
        taskObject.addtoList(taskInput.value, masterList);
});
const clearTasksbutton = document.querySelector(".clearAll");
clearTasksbutton.addEventListener("click", () => {
    taskObject.clearStorage();
    taskObject.clearDisplay();
});
const changeListNamebutton = document.querySelector(".changeListName");
changeListNamebutton.addEventListener("click", () => {
    let listNameInput = document.querySelector(".listNameInput");
    if (!listNameInput.value)
        return;
    else
        listObject.changeListName(listNameInput.value);
});
