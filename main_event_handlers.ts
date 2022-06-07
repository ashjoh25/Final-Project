const taskObject : taskManager = new taskManager();
const listObject : listManager = new listManager();

const masterList = document.querySelector(".master1") as HTMLDivElement;
const list_container = document.querySelector(".list_container") as HTMLDivElement

listObject.setUsername();
listObject.loadLists(list_container);

const addTaskbutton = document.querySelector(".addTask") as HTMLButtonElement;

addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput") as HTMLInputElement;
    taskObject.addtoMaster(taskInput.value, masterList);
});
