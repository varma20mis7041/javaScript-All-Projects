let input = document.getElementById("defuser");
let timerText = document.getElementById("timer");
let noteText = document.getElementById("note");
let counter = 10;
let intervalId = null;
intervalId = setInterval(function() {
    if (counter >= 0) {
        timerText.textContent = counter;

        if (counter % 2 === 0) {
            if (counter < 4) {
                noteText.textContent = "Hurry up !.Press defuse and enter key to save the world ";
                noteText.style.color = "white";
                timerText.style.color = "red";
            } else {
                noteText.textContent = "Press defuse and enter key to save the world";
            }

        } else {
            noteText.textContent = "";
        }
    } else {
        timerText.textContent = "BOOM YOU FAILED";
        timerText.style.color = "red";
        noteText.textContent = "";
    }
    counter = counter - 1;
}, 1000)

function stopTimer(event) {
    if (event.key === "Enter" && input.value === "defuse") {
        clearInterval(intervalId)
        timerText.textContent = "Hurry! You Stopped the Bomb";
        timerText.style.color = "green";
    }
}
input.addEventListener("keydown", stopTimer);


let secondIntervalId = null;