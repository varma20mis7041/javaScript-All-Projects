let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let timerId;
let count;

function clearPreviousInterval() {
    clearInterval(timerId);
}
twentySecondsBtn.onclick = function() {

    count = 20;
    setTimerandRun();

}
thirtySecondsBtn.onclick = function() {

    count = 30;
    setTimerandRun();

}
fortySecondsBtn.onclick = function() {

    count = 40;
    setTimerandRun();

}
oneMinuteBtn.onclick = function() {

    count = 60;
    setTimerandRun();

}

function setTimerandRun() {
    clearPreviousInterval();

    timerText.textContent = count + " seconds left";
    timerId = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            clearPreviousInterval();
            timerText.textContent = "Your moment is complete";
        }
    }, 1000);

}