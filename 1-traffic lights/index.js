let stopButtonb = document.getElementById("stopButton");
let readyButtonb = document.getElementById("readyButton");
let goButtonb = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stopButton() {
    stopButtonb.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    // turning of remaining colors
    readyButtonb.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
    goButtonb.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
}

function readyButton() {
    readyButtonb.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    // turning of remaining colors
    stopButtonb.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";
    goButtonb.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";

}

function goButton() {
    goButtonb.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";

    // turning of remainingcolors
    readyButtonb.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    stopButtonb.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";
}
