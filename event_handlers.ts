// user-input event handlers 

const masterList = document.querySelector(".masterList") as HTMLElement;
const addTaskbutton = document.querySelector(".addTask") as HTMLButtonElement;
const submitButton = document.querySelector("submitInfo") as HTMLButtonElement;
const taskObject : Task = new Task(masterList);

const username = document.querySelector("name") as HTMLInputElement;
let numberoflists = document.querySelector("lists") as HTMLInputElement;
let namesoflists = document.querySelector("listnames") as HTMLInputElement;
let taskInput = document.querySelector(".taskInput") as HTMLInputElement;

let user : string = username.value
let numoflists : number = Number(numberoflists.value)
let listnames : string = namesoflists.value

submitButton.addEventListener("click", () => {
});

addTaskbutton.addEventListener("click", () => {
    taskObject.addtoMaster(taskInput.value);
});

