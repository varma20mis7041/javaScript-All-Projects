let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordContainer = document.getElementById("wordsContainer");

let addBtn = document.getElementById("addBtn");

let spanElement;
for (let word of wordCloud) {
    let randomNumber = Math.ceil(Math.random() * 100);
    let fontSize = randomNumber + "px";
    spanElement = document.createElement("span");
    spanElement.classList.add("m-3");
    spanElement.textContent = word;
    spanElement.style.fontSize = fontSize;
    wordContainer.appendChild(spanElement);

}
addBtn.onclick = function() {
    let errorMsgElement = document.getElementById("errorMsg");
    let randomNumber = Math.ceil(Math.random() * 100);
    let fontSize = randomNumber + "px";
    let userInput = document.getElementById("userInput");
    spanElement = document.createElement("span");
    if (userInput.value === "") {
        errorMsgElement.textContent = "Please enter a word";
    } else {
        spanElement.textContent = userInput.value;
        spanElement.style.fontSize = fontSize;
        spanElement.classList.add("m-3");
        wordContainer.appendChild(spanElement);
        userInput.value = "";
        errorMsgElement.textContent = "";
    }



}