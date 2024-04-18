let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;
const footer = document.getElementById("footer");
let footerHeight = footer.offsetHeight;

window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.classList.add("hidden");
        footer.classList.add("hidden");
    } else {
        // Scroll up
        navbar.classList.remove("hidden");
        footer.classList.remove("hidden");
    }
    
    lastScrollTop = scrollTop;
});


