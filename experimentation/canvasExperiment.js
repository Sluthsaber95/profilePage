var canvas = document.getElementById('canvas');
//Always check for properties and methods, to make sure your code doesn't break in other browsers.

var context = canvas.getContext('2d');
// Reset the current path
context.lineWidth = 10;
context.strokeStyle = "rgb(65, 133, 189)";
context.lineCap = "flat";
context.beginPath();
// Staring point (10,45)


let x1 = 0;
let y1 = 406;
let x2 = 165;
let y2 = 406 - 100;

context.moveTo(x1, y1);
// End point (180,47)
context.lineTo(x2, y2);
// Make the line visible
context.stroke();

var context2 = canvas.getContext('2d');
// Reset the current path
context2.lineWidth = 10;
context2.strokeStyle = "rgb(65, 133, 189)";
context2.lineCap = "round";
context2.beginPath();
// Staring point (10,45)


let x3 = x2;
let y3 = 406 - 100;
let x4 = x2 + 165;
let y4 = 406 - 100;

context2.moveTo(x3, y3);
// End point (180,47)
context2.lineTo(x4, y4);
// Make the line visible
context2.stroke();

var context3 = canvas.getContext('2d');
// Reset the current path
context3.lineWidth = 10;
context3.strokeStyle = "rgb(65, 133, 189)";
context3.lineCap = "round";
context3.beginPath();
// Staring point (10,45)


let x5 = x4;
let y5 = y4;
let x6 = x4 + 165;
let y6 = y4 - 100;

context2.moveTo(x5, y5);
// End point (180,47)
context2.lineTo(x6, y6);
// Make the line visible
context2.stroke();

var context4 = canvas.getContext('2d');
// Reset the current path
context4.lineWidth = 10;
context4.strokeStyle = "rgb(65, 133, 189)";
context4.lineCap = "round";
context4.beginPath();
// Staring point (10,45)


let x7 = x6;
let y7 = y6;
let x8 = x6 + 165;
let y8 = y6;

context4.moveTo(x7, y7);
// End point (180,47)
context4.lineTo(x8, y8);
// Make the line visible
context4.stroke();