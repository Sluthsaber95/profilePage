// Minimum resizable area
const minWidth = 60;
const minHeight = 40;

// Thresholds
const margins = 2;

// Moving Pane Configuration
const deviceScreen = document.getElementById("deviceScreen");
const pane = document.getElementById('pane');
let clicked = null;
let b, x, y, right;
let redraw = false;
let e;

// Sets the final bounds of the visible pane and ghost pane
function setBounds(element, x, y, w, h) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.width = w + 'px';
    element.style.height = h + 'px';
}

// Trigger whenever an action is made to recalcuate the pane bounds
const calc = (e) => {
    b = pane.getBoundingClientRect();
    x = e.clientX - b.right;
    y = e.clientY - b.top;
    right = b.right;
}

/*
User Flow 

Click -> Drag -> Release

1) User Clicks/Presses Down with finger on tab -> onDown
2) User Drags out div/ User drags with finger on tab -> onMove
3) User release click/ User release finger -> onUp 
*/

// 1) User Clicks/Presses Down with finger on tab
const onDown = e => {
    calc(e);
    clicked = {
        x,
        y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
    };
    console.log("b.right :" + b.right);
    console.log("b.left :" + b.left);
    console.log("b.width :" + b.width);
    console.log("clicked.cx :" + clicked.cx);
}

// 2) User Drags out div/ User drags with finger on tab
function onMove(ee) {
    calc(ee);
    e = ee;
    redraw = true;
}
// 3) User release click/ User release finger
function onUp(e) {
    calc(e);
    if (b.left < margins) {
        // hintLeft();
        setBounds(pane, 0, 0, deviceScreen.width / 2, deviceScreen.height);
    }
    clicked = null;
}

const onTouchDown = (e) => {
    onDown(e.touches[0]);
    e.preventDefault();
}

const onTouchMove = (e) => {
    onMove(e.touches[0]);
}

const onTouchEnd = (e) => {
    if (e.touches.length == 0) onUp(e.changedTouches[0]);
}

const onMouseDown = (e) => {
    onDown(e);
    e.preventDefault();
}

function animate() {
    window.requestAnimationFrame(animate);
    if (!redraw) return;
    redraw = false;
    if (clicked) {
        var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
    }
    if (currentWidth > minWidth) {
        pane.style.width = currentWidth + 'px';
        pane.style.left = e.clientX + 'px';
    }
    return;
}
animate();

// Mouse events
tab.addEventListener('mousedown', onMouseDown);
deviceScreen.addEventListener('mousemove', onMove);
deviceScreen.addEventListener('mouseup', onUp);

// Touch events	
tab.addEventListener('touchstart', onTouchDown);
deviceScreen.addEventListener('touchmove', onTouchMove);
deviceScreen.addEventListener('touchend', onTouchEnd);