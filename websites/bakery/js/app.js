var stickyNavBg = document.querySelector(".sticky-nav-bg");
var menu = document.querySelector("nav");
document.addEventListener(
    "scroll",
    function () {
        if (window.scrollY >= 60) {
            stickyNavBg.style.opacity = 1;
            menu.classList.add("menu-sticked");
        } else {
            stickyNavBg.style.opacity = 0;
            menu.classList.remove("menu-sticked");
        }
    }
)