"use strict";
class taskManager {
    clearStorage() {
        localStorage.removeItem("master1");
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            localStorage.removeItem("slot" + i);
        }
    }
    clearDisplay() {
        document.querySelectorAll(".taskLabel").forEach(function (elm) {
            elm.remove();
        });
    }
    updateLocal() {
        this.clearStorage();
        let masterStorage = "";
        let masterList = document.querySelector(".master1").childNodes;
        for (const elm of masterList) {
            masterStorage += elm.textContent + ",";
        }
        masterStorage = masterStorage.slice(0, -1);
        localStorage.setItem("master1", masterStorage);
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            let list = document.querySelector(".slot" + i);
            let slotStorage = "";
            if (!(list.childNodes.length === 0)) {
                let listTasks = list.childNodes;
                for (let j = 1; j < list.childNodes.length; j++) {
                    slotStorage += listTasks[j].textContent + ",";
                }
            }
            slotStorage = slotStorage.slice(0, -1);
            localStorage.setItem("slot" + i, slotStorage);
        }
    }
    addtoList(text, list) {
        let newTaskItem = document.createElement("label");
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("class", "taskLabel");
        newTaskItem.setAttribute("draggable", "true");
        list.appendChild(newTaskItem);
        let newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        newTaskItem.appendChild(newCheckBox);
        let newCheckMark = document.createElement("span");
        newCheckMark.setAttribute("class", "checkmark");
        newTaskItem.appendChild(newCheckMark);
        this.updateLocal();
        localStorage.removeItem("userWithInfo");
        localStorage.setItem("userWithInfo", "true");
    }
}
