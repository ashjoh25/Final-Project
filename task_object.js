"use strict";
// properties and behaviors of a Task
class Task {
    constructor(masterList) {
        this.masterList = masterList;
    }
    addtoMaster(text) {
        let newTaskItem = document.createElement("input");
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("type", "checkbox");
        this.masterList.appendChild(newTaskItem);
    }
}
