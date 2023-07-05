let searchInput = document.getElementById("searchInput");
let resultContainer = document.getElementById("resultCountries");
let searchInputVal = "";
let contriesList = [];


function createAndAppendSearchResult(result) {
    let {
        name,
        flag,
        population
    } = result;
    //div container for flag and names class country-card d-flex flex-column 

    let resultItemContainer = document.createElement("div");
    resultItemContainer.classList.add("country-card", "d-flex", "flex-row", "col-12", "col-md-5", "m-2");
    resultItemContainer.id = "itemContainer";
    resultContainer.appendChild(resultItemContainer);
    //div container for img 

    let imgContainer = document.createElement("div");
    resultItemContainer.appendChild(imgContainer);
    //img Element class country-flag
    let imgElement = document.createElement("img");
    imgElement.classList.add("country-flag", "m-2");
    imgElement.src = flag;
    imgContainer.appendChild(imgElement);

    //div container for name and flag  
    let nameAndFlagDivContainer = document.createElement("div");
    imgContainer.classList.add();
    resultItemContainer.appendChild(nameAndFlagDivContainer);
    //h1 element for name 

    let h1Element = document.createElement("h1");
    h1Element.textContent = name;
    h1Element.classList.add("country-name", "m-2");
    nameAndFlagDivContainer.appendChild(h1Element);
    // p element for paragraph element 
    let pElement = document.createElement("p");
    pElement.classList.add("country-population", "m-2");
    pElement.textContent = population;
    nameAndFlagDivContainer.appendChild(pElement);

}

function displayFetchedResults() {
    resultContainer.textContent = "";
    for (let country of contriesList) {
        let countryName = country.name;
        if (countryName.includes(searchInputVal)) {
            createAndAppendSearchResult(country);
        }

    }


}

function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            contriesList = jsonData;
            console.log(contriesList)
            displayFetchedResults();
        });
}


// function displaySearchResults() {
//     for (let country of contriesList) {
//         let countryName = country.name;
//         console.log(countryName);
//         if (countryName.includes(searchInputVal)) {
//             createAndAppendSearchResult(country);
//         }
//     }
// }

function findCountry(event) {
    searchInputVal = event.target.value;
    displayFetchedResults();
    // let itemContainer = document.getElementById("itemContainer");
    // if (searchInputVal !== "") {
    //     console.log(searchInputVal);
    //     resultContainer.removeChild(itemContainer);
    //     displaySearchResults(searchInputVal);
    // }


}

getCountries();
searchInput.addEventListener("keyup", findCountry);