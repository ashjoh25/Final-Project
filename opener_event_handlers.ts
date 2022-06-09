// user-input event handlers 

const submitButton = document.querySelector(".submitInfo") as HTMLButtonElement;
const startButton = document.querySelector(".infoExist") as HTMLButtonElement;

submitButton.addEventListener("click", () => {
    localStorage.clear();
    let username = document.querySelector(".name") as HTMLInputElement;
    let numberoflists = document.querySelector(".lists") as HTMLInputElement;
    let namesoflists = document.querySelector(".listnames") as HTMLInputElement;

    if (username.value)
        localStorage.setItem("username", username.value);
    else
        localStorage.setItem("username", "Your");

    localStorage.setItem("numoflists", numberoflists.value);
    localStorage.setItem("nameoflists", namesoflists.value);
    
    localStorage.setItem("userWithInfo", "false")
    location.href = "main.html";
});

startButton.addEventListener("click", () => {
    localStorage.setItem("userWithInfo", "true")
    location.href = "main.html";
});