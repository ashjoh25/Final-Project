// event handlers for the main page that contains the task manager itself

// sets the "[User]'s Task Manager!" heading on the page
function setUsername() : void {
    let username = localStorage.getItem("username") as string;
    let username_ele = document.querySelector(".username") as HTMLHeadingElement;
    if (username === "Your") {
        username_ele.textContent = username + " Task Manager!";
    } else {
        username_ele.textContent = username + "'s Task Manager!";
    };
};

// create a new task object and list object that contain the necessary methods
const taskObject : taskManager = new taskManager();
const listObject : listManager = new listManager();

setUsername();
// calls the method to load and put all the user's lists on the page
listObject.loadLists();

// checks if user has info through local storage, and if so, loads the data stored into the page
if (localStorage.getItem("userWithInfo") === "true") {
    listObject.loadMasterTasks();
    listObject.loadListsTasks(taskObject);
};


// a series of selecting one of the buttons on the page and adding an event listener to listen for user's click
// methods are called corresponding to the button / the button's purpose

const add_task_button = document.querySelector("#addTask") as HTMLButtonElement;

add_task_button.addEventListener("click", () => {
    let user_task_input = document.querySelector(".taskInput") as HTMLInputElement;
    if (! user_task_input.value) { // checking if user did not type anything
        return;
    } else {
        let master_default = document.querySelector(".master1") as HTMLDivElement;
        taskObject.addtoList(user_task_input.value, master_default);
        taskObject.updateLocal();
    };
});

const add_list_button = document.querySelector("#addList") as HTMLButtonElement;

add_list_button.addEventListener("click", () => {
    let user_list_input = document.querySelector(".listInput") as HTMLInputElement;
    if (! user_list_input.value) {
        return;
    } else {
        listObject.addNewlist(user_list_input.value);
        taskObject.updateLocal();
    };
});

const clear_tasks_button = document.querySelector("#clearAll") as HTMLButtonElement;

clear_tasks_button.addEventListener("click", () => {
    taskObject.clearAllStorage();
    taskObject.clearDisplay();
});

const change_listname_button = document.querySelector("#changeListName") as HTMLButtonElement;

change_listname_button.addEventListener("click", () => {
    let listNameInput = document.querySelector(".listNameInput") as HTMLInputElement;
    if (! listNameInput.value) { // checking if user did not type anything
        return;
    } else {
        listObject.changeListName(listNameInput.value);
        listObject.loadListsTasks(taskObject);
    };
});

document.querySelectorAll<HTMLElement>(".taskLabel").forEach(function(task_elm) {
    task_elm.addEventListener("click", (event : MouseEvent) => {
        if (event.shiftKey === true) {
            taskObject.removeTask(event.target as HTMLElement);
        };
    });
});

document.querySelectorAll<HTMLElement>(".slot").forEach(function(list_elm) {
    list_elm.addEventListener("click", (event : MouseEvent) => {
        if (event.shiftKey === true) {
            listObject.removeList(event.target as HTMLElement);
            taskObject.updateLocal();
        };
    });
});

// beginning of dragging code
let dragged : EventTarget | null = null;
document.addEventListener("dragstart", dragStart); 
 
function dragStart(event: DragEvent) {
    dragged = event.target;
};

const boxes = document.querySelectorAll(".list_container");
const moreboxes = document.querySelectorAll(".masterList");

moreboxes.forEach(masterList => {
    masterList.addEventListener("dragenter", dragEnter);
    masterList.addEventListener("dragover", dragOver);
    masterList.addEventListener("dragleave", dragLeave);
    masterList.addEventListener("drop", drop);
});

boxes.forEach(list_container => {
    list_container.addEventListener("dragenter", dragEnter);
    list_container.addEventListener("dragover", dragOver);
    list_container.addEventListener("dragleave", dragLeave);
    list_container.addEventListener("drop", drop);
});

function dragEnter(event : DragEvent) {
    event.preventDefault();
    event.target!.classList.add("drag-over");
};

function dragOver(event : DragEvent) {
    event.preventDefault();
    event.target!.classList.add("drag-over");
};

function dragLeave(event : DragEvent) {
    event.target!.classList.remove("drag-over");
};

function drop(event : DragEvent) {
    event.target!.classList.remove("drag-over");
    
    //add it to drop target
    event.target!.appendChild(dragged);
    taskObject.updateLocal();
};
// end of dragging code

// "autosave" --> every 500 millseconds, updateLocal() is called to save in local storage the current version of the page + its data
setInterval(function() {
    taskObject.updateLocal();
}, 500);