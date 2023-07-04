let numbers = [17, 31, 77, 20, 63];
let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexNumber = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let userInputNumber = null;
    userInputNumber = userInput.value;
    console.log(userInputNumber);
    if (userInputNumber === '') {
        alert("you need to enter number");
        indexNumber.textContent = "";
        return;
    }

    let index = numbers.findIndex(function(eachNumber) {

        if (parseInt(userInputNumber) === eachNumber) {
            return true;
        } else {
            return false;
        }
    });
    console.log(index)
    indexNumber.textContent = index;

}