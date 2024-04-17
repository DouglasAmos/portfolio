let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.add("hidden");
    } else {
        // Scroll up
        navbar.classList.remove("hidden");
    }
    
    lastScrollTop = scrollTop;
});