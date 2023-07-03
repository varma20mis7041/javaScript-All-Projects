let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Bhargav varma",
    age: 22
};
let profileContainer = document.getElementById("profileContainer");
let imgContainer = document.getElementById("imgContainer");
let img = document.createElement('img');
img.src = profileDetails.imgSrc;
imgContainer.appendChild(img);
imgContainer.classList.add("text-center");

let h1Element = document.createElement('h1');
h1Element.textContent = profileDetails['name'];
h1Element.classList.add("main-heading");
profileContainer.appendChild(h1Element);

let ageElement = document.createElement("p");
ageElement.textContent = "Age :" + profileDetails.age;
ageElement.classList.add("age-paragraph");
profileContainer.appendChild(ageElement);


let footerContainer = document.createElement("div");
footerContainer.classList.add('last-container');
document.body.appendChild(footerContainer);
let headingElement = document.createElement("p");
headingElement.textContent = "Developed by @Bhargav varma | date : 28 dec 2022 |contact : bhargav.coding@gmail.com";

footerContainer.appendChild(headingElement);

let noteElement = document.createElement("p");
noteElement.textContent = "Note: this page is created through javascript DOM manipulations";
noteElement.classList.add("text-center");
noteElement.classList.add("pt-5");
profileContainer.appendChild(noteElement);