// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameUrlEl = document.getElementById("siteUrlInput");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg")
let bookmarksList = document.getElementById("bookmarksList");

let bookmarkForm = document.getElementById("bookmarkForm");
let submitBtn = document.getElementById("submitBtn");

let bottomSectionContainer = document.getElementById("bottomSection");


bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
})
siteNameInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
})
siteNameUrlEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
})

function createNewBookMark(siteName, url) {
    let bookmark_card_container = document.createElement("div");
    bookmark_card_container.classList.add("bookmark_card");
    bottomSectionContainer.appendChild(bookmark_card_container);



    let siteNameHeadingElement = document.createElement("h1");
    siteNameHeadingElement.classList.add("book_mark_heading");
    siteNameHeadingElement.textContent = siteName;
    bookmark_card_container.appendChild(siteNameHeadingElement);

    let siteUrlElement = document.createElement("a");
    siteUrlElement.href = url;
    siteUrlElement.target = "_blank";
    siteUrlElement.textContent = url;
    bookmark_card_container.appendChild(siteUrlElement);
}
submitBtn.addEventListener("click", function() {
    if (siteNameUrlEl.value === "" && siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } else if (siteNameUrlEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        let url = siteNameUrlEl.value;
        let siteName = siteNameInputEl.value;
        if (url === "" && siteName === "") {
            siteNameErrMsgEl.text
            siteUrlErrMsgEl
        }
        console.log(siteName)
        createNewBookMark(siteName, url);
    }


})