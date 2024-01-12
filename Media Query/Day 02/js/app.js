var menu = document.querySelector("#menu");
var hamburger = document.querySelector("#hamburger");


hamburger.addEventListener(
    "click",
    function () {
        var iTag = hamburger.children[0];
        if (iTag.classList.contains("fa-bars")) {
            menu.style.left = 0;
        } else {
            menu.style.left = "";
        }
        iTag.classList.toggle("fa-bars");
        iTag.classList.toggle("fa-times");

    }
)