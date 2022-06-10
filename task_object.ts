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

        let masterStorage : string = "";

        let masterList = (document.querySelector(".master1") as HTMLDivElement).childNodes;

        for (const elm of masterList) {
            masterStorage += elm.textContent + ",";
        }
        masterStorage = masterStorage.slice(0, -1);

        localStorage.removeItem("master1");
        localStorage.setItem("master1", masterStorage);
        

        let namesoflists = localStorage.getItem("nameoflists") as string;
        let names : string[] = namesoflists.split(",");

        for (let i = 1; i <= names.length; i++) {
            let list = document.querySelector(".slot" + i) as HTMLDivElement;
            let slotStorage : string = "";
            

            if (list.hasChildNodes()) {
                let listTasks = list.childNodes;
                for (let j = 1; j < list.childNodes.length; j++) {
                    slotStorage += listTasks[j].textContent + ",";
                }
                slotStorage = slotStorage.slice(0, -1);
            }

            localStorage.removeItem("slot" + i);
            localStorage.setItem("slot" + i, slotStorage);
        }
    }

    addtoList(text : string, list : HTMLDivElement): void {
        let newTaskItem = document.createElement("label") as HTMLLabelElement;
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("class", "taskLabel");
        newTaskItem.setAttribute("draggable", "true");
        newTaskItem.setAttribute("id", "item");
        masterList.appendChild(newTaskItem);
        list.appendChild(newTaskItem);

        let newCheckBox = document.createElement("input") as HTMLInputElement;
        newCheckBox.setAttribute("type", "checkbox");
        newTaskItem.appendChild(newCheckBox);

        let newCheckMark = document.createElement("span") as HTMLSpanElement;
        newCheckMark.setAttribute("class", "checkmark");
        newTaskItem.appendChild(newCheckMark)

        localStorage.removeItem("userWithInfo");
        localStorage.setItem("userWithInfo", "true")
    }
}