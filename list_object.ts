class listManager {

    setUsername () : void {
        let username : string | null = localStorage.getItem("username");
        let username_ele = document.querySelector(".username") as HTMLHeadingElement;
        if (username === "Your")
            username_ele.textContent = username + " Task Manager!";
        else
            username_ele.textContent = username + "'s Task Manager!";
    }

    loadListsNames (list_container : HTMLDivElement) : void {
        let namesoflists = localStorage.getItem("nameoflists") as String;
        let names : string[] = namesoflists.split(",");

        for (let i = 1; i <= names.length; i++) {
            // Creates a div container which acts as the "list" to be placed in the corresponding slot on the webpage
            let list_ele = document.createElement("div");
            list_ele.setAttribute("class", "slot" + i);
            list_ele.setAttribute("id", "box" + i);
            list_container.appendChild(list_ele)

            // Adds name of list to the corresponding list on the webpage
            let list_name = names[i - 1];
            let list_name_ele = document.createElement("h4");
            list_name_ele.textContent = list_name;
            list_ele.appendChild(list_name_ele);
        }
    }

    loadListsTasks (masterList : HTMLDivElement, list_container : HTMLDivElement, taskObject : taskManager) : void {
        let masterListTasks = localStorage.getItem("master1") as string;
        let masterTasks : string[] = []

        if (masterListTasks) {
            masterTasks = masterListTasks.split(",");

            for (let i = 0; i < masterTasks.length; i++) {
                taskObject.addtoList(masterTasks[i], masterList);
            }
        }

        let namesoflists = localStorage.getItem("nameoflists") as string;
        let names : string[] = namesoflists.split(",");

        for (let i = 1; i <= names.length; i++) {
            let ListTasks = localStorage.getItem("slot" + i) as string;
            let listTasks : string[] = [];
            
            if (ListTasks) {
                listTasks = ListTasks.split(",");

                for (let j = 0; j < listTasks.length; j++) {
                    taskObject.addtoList(listTasks[j], list_container);
                }
            }
        }
    }

    changeListName (listChange : string) : void {
        listChange.split(",");
        
    }

}