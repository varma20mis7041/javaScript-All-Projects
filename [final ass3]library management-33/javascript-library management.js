let searchInputEl = document.getElementById("searchInput");
let searchResultsContainer = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let url;
let searchResultsVal = []

function createAndAppendResult(result) {
    let {
        imageLink,
        author
    } = result;

    //bookCardContainer col-5 
    let cardItem = document.createElement("div");
    cardItem.classList.add("col-6", "mt-4", "mb-4", "text-center");
    cardItem.id = "cardItem";
    searchResultsContainer.appendChild(cardItem);
    console.log(searchResultsContainer)

    //HTMLImageElement
    let bookImg = document.createElement("img");
    bookImg.src = imageLink;
    cardItem.appendChild(bookImg)

    //author 
    let authorPara = document.createElement("p");
    authorPara.classList.add("text-center");
    authorPara.textContent = author;
    cardItem.appendChild(authorPara);


    console.log(searchResultsContainer)

}

function displaySearchResults() {
    spinner.classList.toggle("d-none");
    if (searchResultsVal.length === 0) {
        let h1Element = document.createElement("h1");
        h1Element.textContent = "No Resuls Found";
        h1Element.classList.add("search_results_Heaing", "col-12", "mt-3", "text-center");
        searchResultsContainer.appendChild(h1Element);
    } else {
        let h1Element = document.createElement("h1");
        h1Element.textContent = "Popular Books";
        h1Element.classList.add("search_results_Heaing", "col-12", "mt-3");
        searchResultsContainer.appendChild(h1Element);
        for (let result of searchResultsVal) {
            createAndAppendResult(result);
        }
    }

}
searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none")
        let parameter = event.target.value;
        url = "https://apis.ccbp.in/book-store?title=" + parameter;
        let option = {
            method: "GET"
        };
        fetch(url, option).then(function(response) {
            console.log(url)
            return response.json()
        }).then(function(jsonData) {

            searchResultsVal = jsonData.search_results;
            displaySearchResults();

        })
    }
})