let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let recipeTitle = document.getElementById("recipeTitle");
recipeTitle.textContent = "Tomato Pasta";
recipeTitle.classList.add("recipe-title");

let recipeImage = document.getElementById("recipeImage");
recipeImage.setAttribute("src", recipeObj.imgSrc);
recipeImage.classList.add("w-100");

let listItemContainer = document.getElementById("listItemContainer");
listItemContainer.classList.add("list-item");
let {
    ingredients
} = recipeObj;
console.log(ingredients);
for (let item of ingredients) {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    console.log(item);
    listItemContainer.appendChild(listItem);
}

let footerContainer = document.createElement("div");
footerContainer.classList.add('last-container');
document.body.appendChild(footerContainer);
let headingElement = document.createElement("p");
headingElement.textContent = "Developed by @Bhargav varma | date : 29 dec 2022 |contact : bhargav.coding@gmail.com";

footerContainer.appendChild(headingElement);


let bg_container = document.getElementById("bg_container")
let noteElement = document.createElement("p");
noteElement.textContent = "Note: this page is created through javascript DOM manipulations";
noteElement.classList.add("text-center");
noteElement.classList.add("pt-5");
bg_container.appendChild(noteElement);