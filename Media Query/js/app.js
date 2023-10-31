var ham_menu = document.querySelector("#ham_menu");
var closeBtn = document.querySelector("#close");
var menu = document.querySelector("#menu");
ham_menu.addEventListener(
    "click",
    function () {
        menu.style.left = 0;
    }
)
closeBtn.addEventListener(
    "click",
    function () {
        menu.style.left = "";
    }
)