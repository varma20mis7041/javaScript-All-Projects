let enteredMsg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");


function getUserInputFromLocalStorage() {
    let storedText = localStorage.getItem("userInput");
    if (storedText === null) {
        storedText = "";
        return storedText;
    } else {
        return storedText;
    }
}
enteredMsg.value = getUserInputFromLocalStorage();
saveBtn.onclick = function() {
    let inputText = enteredMsg.value;
    localStorage.setItem("userInput", inputText);
}

clearBtn.onclick = function() {
    localStorage.removeItem("userInput");
    enteredMsg.value = "";
}