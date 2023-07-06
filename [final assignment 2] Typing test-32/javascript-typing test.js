let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let quoteDisplayel = document.getElementById("quoteDisplay");
let timerText = document.getElementById("timerText");
let spinner = document.getElementById('spinner');
let url = "https://apis.ccbp.in/random-quote";
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let fullContainer = document.getElementById("speedTypingTest");

let options = {
    method: "GET"
}
let quote;
let timecount = 0;
let startId;

function startTimer() {

    startId = setInterval(function() {

        timerText.textContent = timecount;
        timecount = timecount + 1;

    }, 1000);
}
startTimer();
submitBtn.onclick = function() {
    if (quoteInput.value === quote) {
        result.textContent = "You Typed in " + timerText.textContent + " seconds";
        clearInterval(startId);
    } else if (quoteInput.value === "") {
        result.textContent = "your input should not be empty";
    } else {
        result.textContent = "You typed incorrect statement";
    }
}

function fetchUrl() {
    fetch(url, options).then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        spinner.classList.add("d-none");
        fullContainer.classList.remove("d-none")
        quoteDisplayel.textContent = jsonData.content;
        quote = quoteDisplayel.textContent;


    })
}
fetchUrl();
resetBtn.onclick = function() {
    spinner.classList.remove("d-none");
    fullContainer.classList.add("d-none");
    timerText.textContent = 0;
    timecount = 0;
    result.textContent = "";
    startTimer();


    quoteInput.value = "";
    fetchUrl();
}