let imageElement = document.getElementById("image");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;
let errorMsg = document.getElementById("warningMessage");
let width_px_text = document.getElementById("imageWidth");
let px_width = 200;

function increment() {
    if (px_width < 300) {
        px_width = px_width + 5;
        let increase_px = px_width + "px";
        imageElement.style.width = increase_px;
        width_px_text.textContent = increase_px;
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Too BIG. Decrease the size of the image";

    }

}

function decrement() {
    if (px_width > 100) {
        px_width = px_width - 5;
        let decrease_px = px_width + "px";
        imageElement.style.width = decrease_px;
        width_px_text.textContent = decrease_px;
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Can't Visible . Increase the size of the image";


    }

}
