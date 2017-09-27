const scrollCounter = document.getElementById("scroll-counter");
const whiteCover = document.getElementById("white-cover");
let scrollAmount = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > 1150) {
        whiteCover.style.width = 0;
    }
    scrollCounter.innerHTML = window.scrollY;
});

whiteCover.addEventListener("scroll", () => {});