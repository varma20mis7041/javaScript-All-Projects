let questionsFormEl = document.getElementById("questionsForm");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");
resultMsgEl.style.color = "red";

let selectedOption;
questionsFormEl.addEventListener("change", function(event) {

    selectedOption = event.target.value;
    console.log(selectedOption);
});
questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedOption === "Delhi") {
        resultMsgEl.style.color = "green";
        resultMsgEl.textContent = "Correct Answer!";
    } else if (selectedOption !== "Delhi") {
        resultMsgEl.style.color = "red";
        resultMsgEl.textContent = "Wrong Answer!";
    } else {
        resultMsgEl.style.color = "red";
        resultMsgEl.textContent = "Please select the Answer";
    }
})