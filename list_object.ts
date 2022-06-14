class listManager {

    clearDisplay() : void { // clears all the lists from the page (other than the master)
        // accesses all the list names from local storage + converts from its string form --> list (very useful)
        let names_of_lists = localStorage.getItem("nameoflists") as String;
        let array_of_listnames : string[] = names_of_lists.split(",");

        // for every existing list, select it from the page by its slot number and remove it 
        for (let i = 1; i <= array_of_listnames.length; i++) {
            let list_elm = document.querySelector("#slot" + i) as HTMLDivElement;
            list_elm.remove();
        };
    };

    loadLists () : void {
        let list_container = document.querySelector(".list_container") as HTMLDivElement;

        let names_of_lists = localStorage.getItem("nameoflists") as String;
        let array_of_listnames : string[] = names_of_lists.split(",");

        for (let i = 1; i <= array_of_listnames.length; i++) {
            // Creates a div container which acts as the "list" to be placed in the corresponding slot on the webpage
            let list_ele = document.createElement("div");
            list_ele.setAttribute("class", "slot");
            list_ele.setAttribute("id", "slot" + i);
            list_container.appendChild(list_ele);

            // Adds name of list to the corresponding list on the webpage
            let list_name = array_of_listnames[i - 1];
            let list_name_ele = document.createElement("h4");
            list_name_ele.textContent = list_name;
            list_ele.appendChild(list_name_ele);
        }
    }

    loadMasterTasks () : void {
        for (let i = 1; i <= 3; i++) {
            let master_slot = document.querySelector(".master" + i) as HTMLDivElement;

            let master_slot_content = localStorage.getItem("master" + i) as string;
            let master_slot_tasknames : string[] = [];

            let master_slot_checks = localStorage.getItem("masterCheck" + i) as string;
            let master_check_values : string[] = [];

            if (master_slot_content) {
                master_slot_tasknames = master_slot_content.split(",");
                master_check_values = master_slot_checks.split(",");

                for (let j = 0; j < master_slot_tasknames.length; j++) {

                    if (master_check_values[j] === "true") {
                        taskObject.addtoList(master_slot_tasknames[j], master_slot, true);
                    } else if (master_check_values[j] === "false") {
                        taskObject.addtoList(master_slot_tasknames[j], master_slot, false);
                    };
                };
            }
        };
    }

    loadListsTasks (taskObject : taskManager) : void {
        let names_of_lists = localStorage.getItem("nameoflists") as string;
        let names : string[] = names_of_lists.split(",");

        for (let i = 1; i <= names.length; i++) {
            let ListTasks = localStorage.getItem("slot" + i) as string;
            let ChecksofTasks = localStorage.getItem("slot" + i + "Check") as string;

            let list_ele = document.querySelector("#slot" + i) as HTMLDivElement;
            let listTasks : string[] = [];
            let checksofTasks : string[] = [];
            
            if (ListTasks) {
                listTasks = ListTasks.split(",");
                checksofTasks = ChecksofTasks.split(",");

                for (let j = 0; j < listTasks.length; j++) {

                    if (checksofTasks[j] === "true") {
                        taskObject.addtoList(listTasks[j], list_ele, true);
                    } else if (checksofTasks[j] === "false") {
                        taskObject.addtoList(listTasks[j], list_ele, false);
                    };
                };
            };
        };
    };

    addNewlist (newListname : string) : void {
        let list_container = document.querySelector(".list_container") as HTMLDivElement;
        
        let new_list_name : string = newListname;

        let names_of_lists = localStorage.getItem("nameoflists") as String;
        let names : string[] = names_of_lists.split(",");

        let list_ele = document.createElement("div");
        list_ele.setAttribute("class", "slot");
        list_ele.setAttribute("id", "slot" + (names.length + 1));
        list_container.appendChild(list_ele)

        let list_name_ele = document.createElement("h4");
        list_name_ele.textContent = new_list_name;
        list_ele.appendChild(list_name_ele);

        names.push(new_list_name);
        localStorage.removeItem("nameoflists");
        localStorage.setItem("nameoflists", names.join(","));
    };

    changeListName (listChange : string) : void {
        let list_change : string[] = listChange.split(",");
        let names_of_lists = localStorage.getItem("nameoflists") as string;
        let names : string[] = names_of_lists.split(",");

        names[names.indexOf(list_change[0], 0)] = list_change[1];
        localStorage.removeItem("nameoflists");
        localStorage.setItem("nameoflists", names.join(","));

        this.clearDisplay();
        this.loadLists();
    };

    removeList(list_ele : HTMLElement) {
        let list_ele_contents = list_ele.childNodes;
        let list_name = (list_ele_contents[0]).textContent as string;

        let new_names_of_lists : string[] = []
        let names_of_lists = localStorage.getItem("nameoflists") as string;
        let names : string[] = names_of_lists.split(",");

        for (let i = 0; i < names.length; i++) {
            if (names[i] === list_name) {
                continue;
            } else {
                new_names_of_lists.push(names[i]);
            };
        };

        localStorage.removeItem("nameoflists");
        localStorage.setItem("nameoflists", new_names_of_lists.join(","));

        let list_ele_slot = list_ele.getAttribute("id") as string;
        localStorage.removeItem(list_ele_slot);
        localStorage.removeItem(list_ele_slot + "Check");

        list_ele.remove();
    };
};