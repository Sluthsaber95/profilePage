const initialPanel = document.getElementById("initial-panel");
const slidePanel = document.getElementById("slide-panel");
const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor-2");
const slidein = document.getElementById("coverup");
const underneath2 = document.getElementById("underneath-2");
initialPanel.addEventListener("click", () => {
    if (slidePanel.style.width === "100%") {
        slidePanel.style.animation = "slidein 1s";
        slidePanel.style.width = "0%"
    } else {
        slidePanel.style.animation = "slideout 1s";
        slidePanel.style.width = "100%"
    }
});

// slidePanel.addEventListener("click", () => {
//     slidePanel.style.animation = "slidein 1s";
//     slidePanel.style.width = "0%"
// });

// setTimeout(() => {
//     cursor.style["margin-left"] += "20px"
// }, 200)
setTimeout(() => {
    cursor.style.animation = "1s blinkmove linear";
}, 0);
setTimeout(() => {
    cursor.style.animation = "1s blink infinite";
    cursor.style.left = "500px";
}, 1000);
setTimeout(() => {
    cursor.style.visibility = "hidden";
    cursor2.style.animation = "1s blinkmove linear";
}, 2000);
setTimeout(() => {
    underneath2.style.color = "rgb(64, 227, 156)";
    cursor2.style.animation = "1s blink infinite";
    cursor2.style.left = "515px";
}, 3000);