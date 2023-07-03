let movieReviewsContainer = document.getElementById("movieReviewsContainer");
let movieName = document.getElementById("titleInput");
let reviewTextarea = document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");
let reviewsContainer = document.createElement("div");
reviewsContainer.id = "reviewsContainer";
reviewsContainer.classList.add("review-container");
movieReviewsContainer.appendChild(reviewsContainer);
addBtn.onclick = function() {
    let movieNameInput = movieName.value;
    let reviewTextareaInput = reviewTextarea.value;
    if (movieNameInput === "") {
        alert("enter the movie title");
        return;
    }


    let h1MovieTitleElement = document.createElement("h1");
    h1MovieTitleElement.textContent = "Movie Title:" + movieNameInput;
    h1MovieTitleElement.classList.add("movie-name");
    reviewsContainer.appendChild(h1MovieTitleElement);

    let pMovieReviewElement = document.createElement("p");
    pMovieReviewElement.textContent = "Review:" + reviewTextareaInput;
    pMovieReviewElement.classList.add("movie-review");
    reviewsContainer.appendChild(pMovieReviewElement);
    let hrline = document.createElement("hr");
    reviewsContainer.appendChild(hrline);
    movieName.value = "";
    reviewTextarea.value = "";

}