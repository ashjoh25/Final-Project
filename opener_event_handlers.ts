// user-input event handlers 

const submitButton = document.querySelector(".submitInfo") as HTMLButtonElement;
const startButton = document.querySelector(".infoExist") as HTMLButtonElement;

submitButton.addEventListener("click", () => {
    let username = document.querySelector(".name") as HTMLInputElement;
    let numberoflists = document.querySelector(".lists") as HTMLInputElement;
    let namesoflists = document.querySelector(".listnames") as HTMLInputElement;

    if (username.value)
        localStorage.setItem("username", username.value);
    else
        localStorage.setItem("username", "Your");
    localStorage.setItem("numoflists", numberoflists.value);
    localStorage.setItem("nameoflists", namesoflists.value);
    
    location.href = "main.html";
});

startButton.addEventListener("click", () => {
    location.href = "main.html";
});


document.addEventListener("mousedown", function(event: MouseEvent){

});