function toPrevious() {
    getImage().src = "assets/images/taksa5.jpg"
}

function toNext() {
    getImage().src = "assets/images/taksa7.jpg"
}

function getImage() {
    return document.getElementById("image");
}