let skillsContainer = document.getElementById("skillsContainer");
skillContainer.classList.add("bg-container");
//HTML heading element creation
let h1element = document.createElement("h1");
h1element.textContent = "Mark your Skills";
h1element.classList.add("main-heading");
skillsContainer.appendChild(h1element);

let ulList = document.createElement("ul");
ulList.classList.add("ul-container");
skillsContainer.appendChild(ulList);





let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

function statusCheck(checkboxId, labelId) {
    let checkInput = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}


function createSkillTask(skill) {
    let labelId = "label" + skill.uniqueNo;
    let checkboxId = "checkbox" + skill.uniqueNo;
    // Creating li element 

    let listItems = document.createElement("li");
    listItems.classList.add("d-flex", "flex-row", "list-item-container");
    ulList.appendChild(listItems);

    // Creating Check box input 
    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.setAttribute("id", checkboxId);

    listItems.appendChild(checkboxInput);

    // Creating Label Element 
    let labelContainer = document.createElement("div");
    listItems.appendChild(labelContainer);
    let labelText = document.createElement("label");
    labelText.setAttribute("id", labelId);
    labelText.setAttribute("for", checkboxId);
    labelText.classList.add("checkbox-label");
    labelText.textContent = skill.skillName;
    listItems.appendChild(labelText);
    checkboxInput.onclick = function() {
        statusCheck(checkboxId, labelId);
    };
}
for (let skill of skillList) {
    createSkillTask(skill);
}
let footerContainer = document.createElement("div");
footerContainer.classList.add('last-container');
document.body.appendChild(footerContainer);
let headingElement = document.createElement("p");
headingElement.textContent = "Developed by @Bhargav varma | Developed date : 29 dec 2022 | contact : bhargav.coding@gmail.com";

footerContainer.appendChild(headingElement);


let bg_container = document.getElementById("bg_container")
let noteElement = document.createElement("p");
noteElement.textContent = "Note: this page is created through javascript DOM manipulations";
noteElement.classList.add("text-center");
noteElement.classList.add("pt-5");
skillsContainer.appendChild(noteElement);
console.log(skillsContainer)
