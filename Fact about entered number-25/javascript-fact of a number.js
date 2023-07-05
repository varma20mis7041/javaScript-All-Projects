let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let loadingEl = document.getElementById("spinner");

function findFact(event) {

    if (event.key === "Enter") {
        factEl.classList.add("d-none");
        loadingEl.classList.remove("d-none");
        let userInput = userInputEl.value;
        if (userInput === '') {
            alert("Enter a number");
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput;
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    factEl.classList.remove("d-none");
                    loadingEl.classList.add("d-none");
                    factEl.textContent = jsonData.fact;
                });
        }
    }
}
userInputEl.addEventListener("keydown", findFact)