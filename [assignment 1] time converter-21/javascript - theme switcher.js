let themeUserInput = document.getElementById("themeUserInput");
let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");

themeUserInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userInput = themeUserInput.value;
        if (userInput === "Dark") {
            heading.style.color = "white";
            bgContainer.classList.add("bg-dark-container");
            bgContainer.classList.remove("bg-container");
        } else if (userInput === "Light") {
            heading.style.color = "#014d40";
            bgContainer.classList.add("bg-container");
            bgContainer.classList.remove("bg-dark-container");
        } else {
            alert("Enter the valid theme");
        }
    }


});