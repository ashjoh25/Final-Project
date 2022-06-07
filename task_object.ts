class taskManager {

    addtoMaster(text : string, masterList : HTMLDivElement): void {
        let newTaskItem = document.createElement("label") as HTMLLabelElement;
        newTaskItem.textContent = text;
        newTaskItem.setAttribute("class", "taskLabel");
        masterList.appendChild(newTaskItem);

        let newCheckBox = document.createElement("input") as HTMLInputElement;
        newCheckBox.setAttribute("type", "checkbox");
        newTaskItem.appendChild(newCheckBox);

        let newCheckMark = document.createElement("span") as HTMLSpanElement;
        newCheckMark.setAttribute("class", "checkmark");
        newTaskItem.appendChild(newCheckMark)
    }
}