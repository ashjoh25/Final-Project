"use strict";
class listManager {
    setUsername() {
        let username = localStorage.getItem("username");
        let username_ele = document.querySelector(".username");
        if (username === "Your")
            username_ele.textContent = username + " Task Manager!";
        else
            username_ele.textContent = username + "'s Task Manager!";
    }
    loadListsNames(list_container) {
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            // Creates a div container which acts as the "list" to be placed in the corresponding slot on the webpage
            let list_ele = document.createElement("div");
            list_ele.setAttribute("class", "slot" + i);
            list_container.appendChild(list_ele);
            // Adds name of list to the corresponding list on the webpage
            let list_name = names[i - 1];
            let list_name_ele = document.createElement("h4");
            list_name_ele.textContent = list_name;
            list_ele.appendChild(list_name_ele);
        }
    }
    loadListsTasks(masterList, list_container, taskObject) {
        let masterListTasks = localStorage.getItem("master1");
        let masterTasks = [];
        if (masterListTasks) {
            masterTasks = masterListTasks.split(",");
            for (let i = 0; i < masterTasks.length; i++) {
                taskObject.addtoList(masterTasks[i], masterList);
            }
        }
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            let ListTasks = localStorage.getItem("slot" + i);
            let listTasks = [];
            if (ListTasks) {
                listTasks = ListTasks.split(",");
                for (let j = 0; j < listTasks.length; j++) {
                    taskObject.addtoList(listTasks[j], list_container);
                }
            }
        }
    }
    changeListName(listChange) {
        listChange.split(",");
    }
}
