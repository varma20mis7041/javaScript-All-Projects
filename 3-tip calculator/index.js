let amount = document.getElementById("billAmount");
let percentage_tip = document.getElementById("percentageTip");
let tip_amount = document.getElementById("tipAmount");
let total_amount = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");

function calculate() {
    if (amount.value === "") {
        error.textContent = "please Enter a Valid Input";
    } else if (percentage_tip.value === "") {
        error.textContent = "please Enter a Valid Input";
    } else {
        let calculateTip = (parseInt(percentage_tip.value) / 100) * parseInt(amount.value);
        console.log(calculateTip);
        tip_amount.value = calculateTip;
        total_amount.value = parseInt(amount.value) + calculateTip;
        error.textContent = "";
    }


}
