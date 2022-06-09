"use strict";
let dragged = null;
const taskObject = new taskManager();
const listObject = new listManager();
const masterList = document.querySelector(".master1");
const list_container = document.querySelector(".list_container");
const taskLabel = document.querySelector(".tasklabel");
listObject.setUsername();
listObject.loadLists(list_container);
const addTaskbutton = document.querySelector(".addTask");
addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput");
    taskObject.addtoMaster(taskInput.value, masterList);
});
document.addEventListener("dragstart", dragStart);
function dragStart(event) {
    dragged = event.target;
}
//drpp targets
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
function dragOver(event) {
    event.preventDefault();
    event.target.classList.add("drag-over");
}
function dragLeave(event) {
    event.target.classList.remove("drag-over");
}
function drop(event) {
    event.target.classList.remove("drag-over");
    //add it to drop target
    event.target.appendChild(dragged);
}
