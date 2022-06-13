class taskManager {

    clearAllStorage() : void {
        localStorage.removeItem("master1");

        let namesoflists = localStorage.getItem("nameoflists") as string;
        let names : string[] = namesoflists.split(",");

        for (let i = 1; i <= names.length; i++) {
            localStorage.removeItem("slot" + i);
        }
    }

    clearDisplay() : void {
        document.querySelectorAll<HTMLElement>(".taskLabel").forEach(function(elm) {
            elm.remove();
        });
    }

    updateLocal() {

        for (let i = 1; i <= 3; i++) {
            let master_storage : string = "";
            let master_check_storage : string = "";

            let master_slot_contents = (document.querySelector(".master" + i) as HTMLDivElement).childNodes;
            
            if (master_slot_contents) {
                for (const task of master_slot_contents) {
                    let task_text = task.textContent as string;
                    master_storage += task_text + ",";
        
                    let default_checkbox = document.querySelector("#" + task_text) as HTMLInputElement;
                    if (default_checkbox.checked) {
                        master_check_storage += "true" + ",";
                    } else {
                        master_check_storage += "false" + ",";
                    };
                };
            };
    
            master_storage = master_storage.slice(0, -1);
            master_check_storage = master_check_storage.slice(0, -1);
    
            localStorage.removeItem("master" + i);
            localStorage.setItem("master" + i, master_storage);
    
            localStorage.removeItem("masterCheck" + i);
            localStorage.setItem("masterCheck" + i, master_check_storage); 
        };

        // updating lists separate from the master 

        let namesoflists = localStorage.getItem("nameoflists") as string;
        let names : string[] = namesoflists.split(",");

        for (let i = 1; i <= names.length; i++) {
            let list = document.querySelector(".slot" + i) as HTMLDivElement;
            let slotStorage : string = "";
            let slotCheck : string = "";

            if (list.hasChildNodes()) {
                let listTasks = list.childNodes;
                for (let j = 1; j < list.childNodes.length; j++) {
                    let listTask_text = listTasks[j].textContent as string;
                    slotStorage += listTask_text + ",";

                    let defaultCheckbox = document.querySelector("#" + listTask_text) as HTMLInputElement;
                    if (defaultCheckbox.checked) {
                        slotCheck += "true" + ",";
                    } else {
                        slotCheck += "false" + ",";
                    }
                }
            }

            slotStorage = slotStorage.slice(0, -1);
            slotCheck = slotCheck.slice(0, -1);

            localStorage.removeItem("slot" + i);
            localStorage.setItem("slot" + i, slotStorage);

            localStorage.removeItem("slot" + i + "Check");
            localStorage.setItem("slot" + i + "Check", slotCheck);
        }
    }

    addtoList(text : string, list : HTMLDivElement, isChecked? : boolean): void {

        let newTaskItem = document.createElement("label") as HTMLLabelElement;
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("class", "taskLabel");
        newTaskItem.setAttribute("draggable", "true");
        list.appendChild(newTaskItem);

        let newCheckBox = document.createElement("input") as HTMLInputElement;
        newCheckBox.setAttribute("type", "checkbox");
        if (isChecked === true) {
            newCheckBox.checked = true;
        }
        newCheckBox.setAttribute("id", text);
        newTaskItem.appendChild(newCheckBox);

        let newCheckMark = document.createElement("span") as HTMLSpanElement;
        newCheckMark.setAttribute("class", "checkmark");
        newTaskItem.appendChild(newCheckMark)

        localStorage.removeItem("userWithInfo");
        localStorage.setItem("userWithInfo", "true")
    }

    removeTask(task_ele : HTMLElement) {
        task_ele.remove();
        this.updateLocal();
    }
}