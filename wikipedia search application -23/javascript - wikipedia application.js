let searchInputElement = document.getElementById("searchInput");
let searchResultsContainerEl = document.getElementById("searchResults");
let spinnerElement = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    //Creating Result Item div container - result-item
    let resultItemContainer = document.createElement("div");
    resultItemContainer.classList.add("result-item");
    searchResultsContainerEl.appendChild(resultItemContainer);


    // anchor element for HTMLTitleElement - result-title
    let resultTitle = document.createElement('a');
    resultTitle.classList.add("result-title");
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultTitle.textContent = title;
    resultItemContainer.appendChild(resultTitle);



    // title br 
    let lineBreakE1 = document.createElement('br');
    resultItemContainer.appendChild(lineBreakE1);
    // url element --result-url
    let resultUrl = document.createElement('a');
    resultUrl.textContent = link;
    resultUrl.href = link;
    resultUrl.classList.add = "result-url";
    resultUrl.target = "_blank";
    resultItemContainer.appendChild(resultUrl);

    // //line break 
    let lineBreakE2 = document.createElement("br");
    resultItemContainer.appendChild(lineBreakE2);
    // // paragraph dicriptin line-description
    let resultDescription = document.createElement("p");
    resultDescription.classList.add("link-description");
    resultDescription.textContent = description;
    resultItemContainer.appendChild(resultDescription);
}

function displaySearchResults(searchResults) {
    spinnerElement.classList.toggle("d-none")
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }



}

function wikepediaSearch(event) {
    if (event.key === "Enter") {
        searchResultsContainerEl.textContent = "";
        spinnerElement.classList.toggle("d-none");
        let searchInput = searchInputElement.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let objects = {
            method: "GET"
        };
        fetch(url, objects)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                console.log(search_results);

                displaySearchResults(search_results);
            });
    }
}

searchInputElement.addEventListener("keydown", wikepediaSearch);

// "https://apis.ccbp.in/wiki-search?search="+searchInput;