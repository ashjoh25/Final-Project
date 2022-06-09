const taskObject : taskManager = new taskManager();
const listObject : listManager = new listManager();

const masterList = document.querySelector(".master1") as HTMLDivElement;
const list_container = document.querySelector(".list_container") as HTMLDivElement

listObject.setUsername();
listObject.loadListsNames();

if (localStorage.getItem("userWithInfo") === "true")
    listObject.loadListsTasks(masterList, list_container, taskObject);

const addTaskbutton = document.querySelector(".addTask") as HTMLButtonElement;

addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput") as HTMLInputElement;
    if (! taskInput.value)
        return;
    else
        taskObject.addtoList(taskInput.value, masterList);
});

const clearTasksbutton = document.querySelector(".clearAll") as HTMLButtonElement;

clearTasksbutton.addEventListener("click", () => {
    taskObject.clearStorage();
    taskObject.clearDisplay();
});

const changeListNamebutton = document.querySelector(".changeListName") as HTMLButtonElement;

changeListNamebutton.addEventListener("click", () => {
    let listNameInput = document.querySelector(".listNameInput") as HTMLInputElement;
    if (! listNameInput.value)
        return;
    else
        listObject.changeListName(listNameInput.value);
});