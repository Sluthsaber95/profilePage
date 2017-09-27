let graphOutline = document.getElementById("graph-outline");
let graph = document.getElementById("graph");
let barPlots = [];
const plots = [];
const numPlots = 0;

const whiteCover = document.getElementById("white-cover");
let scrollAmount = window.scrollY;

const shape1 = document.getElementById("shape-1");
const shape2 = document.getElementById("shape-2");
const shape3 = document.getElementById("shape-3");
const shape4 = document.getElementById("shape-4");

const serum = document.getElementById("img-serum");
const meeseekBox = document.getElementById("img-meeseek-box");
const megaSeed = document.getElementById("img-megaseed");
const timeCrystal = document.getElementById("img-time-crystal");


const serumIcon = document.getElementById("icon-serum");
const meeseekBoxIcon = document.getElementById("icon-meeseek-box");
const megaSeedIcon = document.getElementById("icon-megaseed");
const timeCrystalIcon = document.getElementById("icon-time-crystal");


// tools that I am currently using get rid after production 
const scrollCounter = document.getElementById("scroll-counter");
const widthCounter = document.getElementById("width-counter");

// Just an idea for now const gradient = (y - c) / x;

for (let i = 0; i < numPlots; i++) {
    plots[i] = i;
    barPlots[i] = document.createElement("div");
    barPlots[i].className = "bar-plots";
    barPlots[i].id = "bar-" + i;
    barPlots[i].style.height = plots[i] + "%";
    graph.appendChild(barPlots[i]);
}

const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const canvas4 = document.getElementById('canvas4');
const canvas5 = document.getElementById('canvas5');
//Always check for properties and methods, to make sure your code doesn't break in other browsers.

const context = canvas.getContext('2d');
// Reset the current path
context.lineWidth = 10;
context.strokeStyle = "rgba(65, 133, 189, 1)";
context.lineCap = "round";
context.beginPath();
// Staring point (10,45)


let x1 = 0;
let y1 = 406 - 6;
let x2 = 160;
let y2 = 406 - 103;

context.moveTo(x1, y1);
// End point (180,47)
context.lineTo(x2, y2);
// Make the line visible
context.stroke();

var context2 = canvas2.getContext('2d');
// Reset the current path
context2.lineWidth = 10;
context2.strokeStyle = "rgb(65, 133, 189)";
context2.lineCap = "round";
context2.beginPath();
// Staring point (10,45)


let x3 = 165 + 5;
let y3 = 406 - 105;
let x4 = 165 + 150;
let y4 = 406 - 105;

context2.moveTo(x3, y3);
// End point (180,47)
context2.lineTo(x4, y4);
// Make the line visible
context2.stroke();

var context3 = canvas3.getContext('2d');
// Reset the current path
context3.lineWidth = 10;
context3.strokeStyle = "rgb(65, 133, 189)";
context3.lineCap = "round";
context3.beginPath();
// Staring point (10,45)


let x5 = 320 + 5;
let y5 = 301 - 7;
let x6 = 320 + 150;
let y6 = 301 - 140

context3.moveTo(x5, y5);
// End point (180,47)
context3.lineTo(x6, y6);
// Make the line visible
context3.stroke();

var context4 = canvas4.getContext('2d');
// Reset the current path
context4.lineWidth = 10;
context4.strokeStyle = "rgb(65, 133, 189)";
context4.lineCap = "round";
context4.beginPath();
// Staring point (10,45)


let x7 = 475 + 7;
let y7 = 156;
let x8 = 475 + 150;
let y8 = 156;

context4.moveTo(x7, y7);
// End point (180,47)
context4.lineTo(x8, y8);
// Make the line visible
context4.stroke();

//----------------------------

var contextVertex1 = canvas5.getContext('2d');
// Reset the current path
contextVertex1.lineWidth = 5;
contextVertex1.strokeStyle = "white";
contextVertex1.lineCap = "round";
contextVertex1.beginPath();
// Staring point (10,45)


let x_1 = 165;
let y_1 = 406 - 3;
let x_2 = 165
let y_2 = 301 - 10;

contextVertex1.moveTo(x_1, y_1);
// End point (180,47)
contextVertex1.lineTo(x_2, y_2);
// Make the line visible
contextVertex1.stroke();

//----------------------------

var contextVertex2 = canvas5.getContext('2d');
// Reset the current path
contextVertex2.lineWidth = 5;
contextVertex2.strokeStyle = "white";
contextVertex2.lineCap = "round";
contextVertex2.beginPath();
// Staring point (10,45)


let x_3 = 320 + 1;
let y_3 = 406 - 3;
let x_4 = 320 + 1
let y_4 = 301 - 10;

contextVertex2.moveTo(x_3, y_3);
// End point (180,47)
contextVertex2.lineTo(x_4, y_4);
// Make the line visible
contextVertex2.stroke();

//----------------------------

var contextVertex3 = canvas5.getContext('2d');
// Reset the current path
contextVertex3.lineWidth = 5;
contextVertex3.strokeStyle = "white";
contextVertex3.lineCap = "round";
contextVertex3.beginPath();
// Staring point (10,45)


let x_5 = 475;
let y_5 = 406 - 3;
let x_6 = 475
let y_6 = 156 - 7;

contextVertex2.moveTo(x_5, y_5);
// End point (180,47)
contextVertex2.lineTo(x_6, y_6);
// Make the line visible
contextVertex2.stroke();

const imgCircleItemsBorder = [serum, meeseekBox, megaSeed, timeCrystal];
const graphShapes = [shape1, shape2, shape3, shape4];
const canvasLines = [canvas, canvas2, canvas3, canvas4];

// for (let i = 0; i < 4; i++) {
//     imgCircleItemsBorder[i].style.opacity = 1;
//     graphShapes[i].style.opacity = 1;
//     canvasLines[i].style.opacity = 1;
// }

window.addEventListener("scroll", () => {
    if (window.scrollY > 1150) {
        whiteCover.style.width = 0;

        // setTimeout(() => {
        //     serum.style.animation = "fadein 1s";
        //     serum.style.opacity = 1;
        // }, 1000)
        // setTimeout(() => {
        //     serumIcon.style["animation"] = " pulse_animation 1s linear ";
        //     serumIcon.style["transform-origin"] = "70% 70%";
        // }, 1200)
        // setTimeout(() => {
        //     meeseekBox.style.animation = "fadein 1s";
        //     meeseekBox.style.opacity = 1;
        // }, 1500)
        // setTimeout(() => {
        //     meeseekBoxIcon.style["animation"] = " pulse_animation 1s linear ";
        //     meeseekBoxIcon.style["transform-origin"] = "70% 70%";
        // }, 1700)
        // setTimeout(() => {
        //     megaSeed.style.animation = "fadein 1s";
        //     megaSeed.style.opacity = 1;
        // }, 2250)
        // setTimeout(() => {
        //     megaSeedIcon.style["animation"] = " pulse_animation 1s linear ";
        //     megaSeedIcon.style["transform-origin"] = "70% 70%";
        // }, 2450)
        // setTimeout(() => {
        //     timeCrystal.style.animation = "fadein 1s";
        //     timeCrystal.style.opacity = 1;
        // }, 3500)
        // setTimeout(() => {
        //     timeCrystalIcon.style["animation"] = " pulse_animation 1s linear ";
        //     timeCrystalIcon.style["transform-origin"] = "70% 70%";
        // }, 3700)

        setTimeout(() => {

            graphOutline.addEventListener("mouseleave", () => {
                for (let i = 0; i < 4; i++) {
                    // imgCircleItemsBorder[i].style.opacity = 1;
                    graphShapes[i].style.opacity = 1;
                    canvasLines[i].style.opacity = 1;
                }
            });
            for (let i = 0; i < 4; i++) {
                graphShapes[i].addEventListener("mouseover",
                    () => {
                        for (let j = 0; j < 4; j++) {
                            // imgCircleItemsBorder[i].style.animation = " pulse_animation 1s linear ";
                            // imgCircleItemsBorder[i].style["animation-play-state"] = "running";
                            // imgCircleItemsBorder[i].style.opacity = 1;
                            graphShapes[i].style.opacity = 1;
                            canvasLines[i].style.opacity = 1;

                            if (j !== i) {
                                graphShapes[j].style.opacity = 0.4;
                                canvasLines[j].style.opacity = 0.4;
                                // imgCircleItemsBorder[j].style.opacity = 0.4;
                            }
                        }
                    }
                )
            }
        }, 4000);

    } else if (window.scrollY > 1500 && window.scrollY < 1800) {
        whiteCover.style.width = 630;
    }
    // scrollCounter.innerHTML = window.scrollY;

});