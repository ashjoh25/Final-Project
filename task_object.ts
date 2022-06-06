class taskManager {

    addtoMaster(text : string, masterList : HTMLDivElement): void {
        let newTaskItem = document.createElement("input") as HTMLElement;
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("type", "checkbox");
        masterList.appendChild(newTaskItem);
    }
}