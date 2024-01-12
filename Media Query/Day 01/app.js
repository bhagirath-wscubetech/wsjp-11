var hamburger = document.querySelector("#hamburger");
var closeIt = document.querySelector("#close");
var menu = document.querySelector("#menu");

hamburger.addEventListener(
    "click",
    function () {
        menu.style.left = 0;
    }
)

closeIt.addEventListener(
    "click",
    function () {
        menu.style.left = "";
    }
)