let countValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
incrementBtn.onclick = function() {
    let presentValue = parseInt(countValue.textContent);
    presentValue = presentValue + 1;

    countValue.textContent = presentValue;

}
let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function() {
    countValue.textContent = "0";
}