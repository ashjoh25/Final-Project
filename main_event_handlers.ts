let dragged : EventTarget | null = null
const taskObject : taskManager = new taskManager();
const listObject : listManager = new listManager();

const masterList = document.querySelector(".master1") as HTMLDivElement;
const list_container = document.querySelector(".list_container") as HTMLDivElement
const taskLabel = document.querySelector(".tasklabel") as HTMLLabelElement


listObject.setUsername();
listObject.loadLists(list_container);

const addTaskbutton = document.querySelector(".addTask") as HTMLButtonElement;

addTaskbutton.addEventListener("click", () => {
    let taskInput = document.querySelector(".taskInput") as HTMLInputElement;
    taskObject.addtoMaster(taskInput.value, masterList);
});

 document.addEventListener("dragstart", dragStart); 
 
  function dragStart(event: DragEvent) {

 
    dragged = event.target
}


//drpp targets
const boxes = document.querySelectorAll(".list_container")

boxes.forEach(list_container => {
    list_container.addEventListener("dragenter", dragEnter);
    list_container.addEventListener("dragover", dragOver);
    list_container.addEventListener("dragleave", dragLeave);
    list_container.addEventListener("drop", drop);
});

function dragEnter(event : DragEvent) {
    event.preventDefault();
    event.target!.classList.add("drag-over");
}

function dragOver(event : DragEvent) {
    event.preventDefault();
    event.target!.classList.add("drag-over");
}

function dragLeave(event : DragEvent) {
    event.target!.classList.remove("drag-over")
}

function drop(event : DragEvent) {
    event.target!.classList.remove("drag-over");
    
    //add it to drop target
    event.target!.appendChild(dragged);

}