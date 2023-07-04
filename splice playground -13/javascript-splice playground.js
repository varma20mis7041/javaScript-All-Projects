let arr = [1, 7, 3, 1, 0, 20, 77];
let stringifiedArray = JSON.stringify(arr);
let updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = stringifiedArray;

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");


let spliceButton = document.getElementById("spliceBtn");
spliceButton.onclick = function() {
    let newArray = updatedArray.textContent;
    let newArrayObject = JSON.parse(newArray);
    if (startIndexInput.value === "") {
        alert("Enter start Index");
        return;
    }
    let startIndex = parseInt(startIndexInput.value);
    let noOfItemsDelete = parseInt(deleteCountInput.value);
    let addItem = itemToAddInput.value;

    newArrayObject.splice(startIndex, noOfItemsDelete, addItem);

    startIndexInput.value = "";
    deleteCountInput.value = "";
    itemToAddInput.value = "";
    updatedArray.textContent = JSON.stringify(newArrayObject);
}