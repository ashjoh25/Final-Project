"use strict";
class listManager {
    setUsername() {
        let username = localStorage.getItem("username");
        let username_ele = document.querySelector(".username");
        username_ele.textContent = username + "'s Task Manager!";
    }
    loadLists(list_container) {
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
}
