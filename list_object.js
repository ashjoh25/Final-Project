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
    clearDisplay() {
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            let list_ele = document.querySelector(".slot" + i);
            list_ele.remove();
        }
    }
    loadLists() {
        let list_container = document.querySelector(".list_container");
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            // Creates a div container which acts as the "list" to be placed in the corresponding slot on the webpage
            let list_ele = document.createElement("div");
            list_ele.setAttribute("class", "slot" + i);
            list_ele.setAttribute("id", "box" + i);
            list_container.appendChild(list_ele);
            // Adds name of list to the corresponding list on the webpage
            let list_name = names[i - 1];
            let list_name_ele = document.createElement("h4");
            list_name_ele.textContent = list_name;
            list_ele.appendChild(list_name_ele);
        }
    }
    loadMasterTasks() {
        for (let i = 1; i <= 3; i++) {
            let master_slot = document.querySelector(".master" + i);
            let master_slot_content = localStorage.getItem("master" + i);
            let master_slot_tasknames = [];
            let master_slot_checks = localStorage.getItem("masterCheck" + i);
            let master_check_values = [];
            if (master_slot_content) {
                master_slot_tasknames = master_slot_content.split(",");
                master_check_values = master_slot_checks.split(",");
                for (let j = 0; j < master_slot_tasknames.length; j++) {
                    if (master_check_values[j] === "true") {
                        taskObject.addtoList(master_slot_tasknames[j], master_slot, true);
                    }
                    else if (master_check_values[j] === "false") {
                        taskObject.addtoList(master_slot_tasknames[j], master_slot, false);
                    }
                    ;
                }
                ;
            }
        }
        ;
    }
    loadListsTasks(taskObject) {
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        for (let i = 1; i <= names.length; i++) {
            let ListTasks = localStorage.getItem("slot" + i);
            let ChecksofTasks = localStorage.getItem("slot" + i + "Check");
            let list_ele = document.querySelector(".slot" + i);
            let listTasks = [];
            let checksofTasks = [];
            if (ListTasks) {
                listTasks = ListTasks.split(",");
                checksofTasks = ChecksofTasks.split(",");
                for (let j = 0; j < listTasks.length; j++) {
                    if (checksofTasks[j] === "true") {
                        taskObject.addtoList(listTasks[j], list_ele, true);
                    }
                    else if (checksofTasks[j] === "false") {
                        taskObject.addtoList(listTasks[j], list_ele, false);
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    changeListName(listChange) {
        let list_change = listChange.split(",");
        let namesoflists = localStorage.getItem("nameoflists");
        let names = namesoflists.split(",");
        names[names.indexOf(list_change[0], 0)] = list_change[1];
        localStorage.removeItem("nameoflists");
        localStorage.setItem("nameoflists", names.join(","));
        this.clearDisplay();
        this.loadLists();
    }
    ;
}
;
