"use strict";
class taskManager {
    addtoMaster(text, masterList) {
        let newTaskItem = document.createElement("input");
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("type", "checkbox");
        masterList.appendChild(newTaskItem);
    }
}
