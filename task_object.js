"use strict";
class taskManager {
    addtoMaster(text, masterList) {
        let newTaskItem = document.createElement("label");
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("class", "taskLabel");
        masterList.appendChild(newTaskItem);
        let newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        newTaskItem.appendChild(newCheckBox);
        let newCheckMark = document.createElement("span");
        newCheckMark.setAttribute("class", "checkmark");
        newTaskItem.appendChild(newCheckMark);
    }
}
