let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let loadingElement = document.getElementById("spinner");

function getJoke() {
    loadingElement.classList.remove("d-none");
    jokeText.classList.add("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jasonData) {
            loadingElement.classList.add("d-none");
            jokeText.classList.remove("d-none");
            jokeText.textContent = JSON.stringify(jasonData.value);
        })
}

jokeBtn.addEventListener("click", getJoke)