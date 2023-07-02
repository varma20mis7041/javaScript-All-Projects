let aboutTab = document.getElementById('aboutTab');
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById('attractionsTab');
let about_button = document.getElementById('aboutButton');
let visit_button = document.getElementById('timeToVisitButton');
let attraction_button = document.getElementById('attractionsButton');

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

function aboutButton() {
    about_button.classList.add("selected-button");
    visit_button.classList.remove("selected-button");
    attraction_button.classList.remove("selected-button");

    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");

}

function visitButton() {
    about_button.classList.remove("selected-button");
    visit_button.classList.add("selected-button");
    attraction_button.classList.remove("selected-button");

    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");


}

function attractionButton() {
    about_button.classList.remove("selected-button");
    visit_button.classList.remove("selected-button");
    attraction_button.classList.add("selected-button");

    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");
}