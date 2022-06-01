// user-input event handlers 
document.addEventListener("mousedown", function(event: MouseEvent){

})

let username = document.querySelector("name") as HTMLInputElement;
let numberoflists = document.querySelector("lists") as HTMLInputElement;
let namesoflists = document.querySelector("listnames") as HTMLInputElement;

let user : string = username.value
let numoflists : number = Number(numberoflists.value)
let listnames : string = namesoflists.value
