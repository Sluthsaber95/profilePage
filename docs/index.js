"use strict";

// 1) Landing Section

(function() {
    // targets class parallax;
    var parallax = document.querySelectorAll(".parallax"),

        // speed of parallax user experiences when moving down
        speed = 0.4;

    window.onscroll = function() {
        // [].slice appends all parallax classes from the NodeList
        // all these classes can not be 'Y' offset
        [].slice.call(parallax).forEach(function(el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgroundPos = "50% " + windowYOffset * speed + "px";
            // background position moves slower than scroll
            el.style.backgroundPosition = elBackgroundPos;
        });
    };
})();

// 2) Project Section

var projectImg = document.getElementsByClassName("project-img");
var projects = document.getElementsByClassName("projects");
var projectBtn = document.getElementsByClassName("project-btn");
var companyIcon = document.getElementsByClassName("company-icon");

// targets a project, via zero-index and changes message if required
var terminalMessage = {
    "0": ["Google Calculator Clone", "_______________________________", "Progress: [======----------] 40% Alpha 0.1.0", "Last Updated: 01/10/2017", "Skills Gained:", "- Unit testing; Mocha + Chai", "- Integration testing of multiple features", '<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', "", ">"],
    "1": ["Pomodoro Clock", "_______________________________", "Progress: [================] 100% Completed", "Last Updated: 01/10/2017", "Skills Gained:", " - Utilized Timer.jsm built-in library", " - UX: Applied Gestalt Principles", " - UX: Maintain clarity + minimalism", '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', ">"],
    "2": ["Tic Tac Toe", "_______________________________", "Progress: [================] 100% Completed", "Last Updated: 28/09/2017", "Skills Gained:", " - Design: Utilize CSS Grid ", " - Applied State behaviour to game app", "", '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', ">"],
    "3": ["Rick and Morty Profile Page", "_______________________________", "Progress: [=========-------] 57% beta 0.5.0", "Last Updated: 02/10/2017", "Skills Gained:", " - Design: Produced Simple Parallax", " - UX: Simple Gamified Features", " - Design: Responsive designs with CSS Grid", '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', ">"],
    "4": ["Epub Reader", "_______________________________", "Progress: [=---------------] 9% 0.0.7", "Last Updated: 02/10/2017", "Skills Gained:", " - First Collaborative software development", " - Design: Responsive designs with CSS Grid", " - UX: Simple Gamified Features", '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', ">"],
    "5": ["", "FreeCodeCamp Manchester Web page", "_______________________________", "Progress: [===-------------] 19% Alpha 0.2.0", "Last Updated: 02/10/2017", "Contributors: A. Collier, A. Tran", "Skills Gained:", " - First Collaborative web development", " - Design: Responsive designs with CSS Grid", '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>', ">"],
    "6": ["", "ERROR 0XFFFFF710", 'Processor', 'Corr:xsfkleg..g364[7345}4__."', "_______________________________", "", "", "", "", '', ">"],
    "7": ["", "ERROR 0XFFFFF710", 'Processor', 'Corr:xsfkleg..g364[7345}4__."', "_______________________________", "", "", "", "", '', ">"]
};
// include the right links with the accompanying image and message
var projectLinks = {
        "0": "http://clerk-dolphin-85063.bitballoon.com/",
        "1": "http://gardener-kevin-53240.bitballoon.com/",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": ""
    }
    // listens for projects being clicked in the 'project-section'
projects[0].addEventListener('click', function(el) {

    // used to create a child div => containing  terminal message
    function messageTranscriber(node, terminalMessage, classIndex) {
        // creates <div id="terminal-text-[index]" style="position: absolute"></div>
        var div = document.createElement("div");
        const viewPortWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
        div.id = "terminal-text-" + classIndex;
        whiteCover.style.width = 60 + scrollBox.scrollTop / 3 + "px";
        div.style.position = "absolute";
        div.style.top = 0;
        div.style.position = "absolute";
        div.style.top = 0;
        for (var i = 0; i < 10; i++) {
            div.innerHTML += "<div class=\"terminal-text\">" + terminalMessage[i] + "</div>";
        }
        // positions text before the terminal background-image URL
        projectBtn[classIndex].insertBefore(div, projectImg[classIndex]);
    }

    // gives an index, used to identify which element is being pressed
    var i = el.target.id.slice(-1);

    // two conditions are used here, `projectImg[i] & projectImg[i].style.opacity == "0"`
    // as a similar if statement for window.scroll event listener used below, 
    // resorting to projectImg[i] becoming undefined
    if (projectImg[i] && projectImg[i].style && projectImg[i].style.opacity == "0") {
        const animationSpeed = 0.5;
        console.log("shouldn't see this first")
        projectImg[i].style.animation = `${animationSpeed}fadein`;
        projectImg[i].style.opacity = 1;
        if (companyIcon[i] & companyIcon[i].style.opacity == "0") {
            companyIcon[i].style.animation = `${animationSpeed}fadein`;
            companyIcon[i].style.opacity = 1;
        }
        // removes child div from within button of index `i`; more precisely 
        // from within {class="projectBtn"} makes the terminal message disappear
        var child = document.getElementById("terminal-text-" + i);
        projectBtn[i].removeChild(child);
        setTimeout(() => {
            projectImg[i].style.animation = "";
            if (companyIcon[i] & companyIcon[i].style.opacity == "0") {
                companyIcon[i].style.animation = "";
            };
        }, animationSpeed * 1000);
    }
    // project image disappears
    // appends child div from within button element, given index `i`; more 
    // precisely from within {class="projectBtn"} makes the terminal message appear
    else {
        projectLinks[`${i}`] === "" ?
            null : window.open(projectLinks[`${i}`]);
        const animationSpeed = 0.5;
        projectImg[i].style.animation = `${animationSpeed}fadeout`;
        projectImg[i].style.opacity = 0;
        if (companyIcon[i]) {
            companyIcon[i].style.animation = `${animationSpeed}fadeout`;
            companyIcon[i].style.opacity = 0;
        }
        projectBtn[i].style.backgroundImage = "url(http://i.imgur.com/IL9nJ3d.png)";
        var terminalMsgMobile = terminalMessage["" + i];
        messageTranscriber(projectBtn[i], terminalMsgMobile, i);
    }
});

var scrollBox = document.getElementsByClassName("scroll-box")[0];
var whiteCover = document.getElementsByClassName("white-cover")[0];

// Depending on the size of the screen, this dictates the graph white
// coverage upon scroll down of scroll-box
scrollBox.addEventListener("scroll", function() {
    const viewPortWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    if (viewPortWidth < 720) {
        whiteCover.style.width = 60 + scrollBox.scrollTop / 3 + "px";
    } else {
        whiteCover.style.width = 140 + scrollBox.scrollTop / 1.5 + "px";
    }
});

window.addEventListener("scroll", function() {
    const projectFaded = new Promise((resolve, reject) => {
        let i = 0
        for (let i = 0; i < 8; i++) {
            if (projectImg[i] && projectImg[i].style && projectImg[i].style.opacity === "0") {
                return resolve(i);
            }
        }

    });
    projectFaded.then((i) => {
        const animationTime = 0.5;
        projectImg[i].style.animation = `${animationTime}s fadein`;
        projectImg[i].style.opacity = 1;
        companyIcon[i].style.animation = `${animationTime}fadein`;
        companyIcon[i].style.opacity = 1;
        setTimeout(() => {
            projectImg[i].style.animation = "";
            if (companyIcon[i] & companyIcon[i].style.opacity == "0") {
                companyIcon[i].style.animation = "";
            };
        }, animationTime * 1000);
        // if (companyIcon[i] && companyIcon[i].style.opacity == "0") {}
        var child = document.getElementById("terminal-text-" + i);
        projectBtn[i].removeChild(child);
    });
});