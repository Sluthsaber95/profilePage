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
                elBackgroundPos = "50% " + (windowYOffset * speed) + "px";
            // background position moves slower than scroll
            el.style.backgroundPosition = elBackgroundPos;
        });
    };
})();


// 2) Project Section

var projectImg = document.getElementsByClassName("project-img");
var projects = document.getElementsByClassName("projects");
var projectBtn = document.getElementsByClassName("project-btn");

// target a project, via zero-index and change message if required
var terminalMessage = {
    "0": [
        "Google Calculator Clone",
        "_______________________________",
        "Progress: [======----------] 40% Alpha 0.1.0",
        "Last Updated: 01/10/2017",
        "Skills Gained:",
        "- Unit testing; Mocha + Chai",
        "- Integration testing of multiple features",
        '<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        "",
        ">",
    ],
    "1": [
        "Pomodoro Clock",
        "_______________________________",
        "Progress: [================] 100% Completed",
        "Last Updated: 01/10/2017",
        "Skills Gained:",
        " - Utilized Timer.jsm built-in library",
        " - UX: Applied Gestalt Principles",
        " - UX: Maintain clarity + minimalism",
        '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        ">",
    ],
    "2": [
        "Tic Tac Toe",
        "_______________________________",
        "Progress: [================] 100% Completed",
        "Last Updated: 28/09/2017",
        "Skills Gained:",
        " - Design: Utilize CSS Grid ",
        " - Applied State behaviour to game app",
        "",
        '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        ">"
    ],
    "3": [
        "Rick and Morty Profile Page",
        "_______________________________",
        "Progress: [=========-------] 57% beta 0.5.0",
        "Last Updated: 02/10/2017",
        "Skills Gained:",
        " - Design: Produced Simple Parallax",
        " - UX: Simple Gamified Features",
        " - Design: Responsive designs with CSS Grid",
        '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        ">"
    ],
    "4": [
        "Epub Reader",
        "_______________________________",
        "Progress: [=---------------] 9% 0.0.7",
        "Last Updated: 02/10/2017",
        "Skills Gained:",
        " - First Collaborative software development",
        " - Design: Responsive designs with CSS Grid",
        " - UX: Simple Gamified Features",
        '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        ">",
    ],
    "5": [
        "",
        "FreeCodeCamp Manchester Web page",
        "_______________________________",
        "Progress: [===-------------] 19% Alpha 0.2.0",
        "Last Updated: 02/10/2017",
        "Contributors: A. Collier, A. Tran",
        "Skills Gained:",
        " - First Collaborative web development",
        " - Design: Responsive designs with CSS Grid",
        '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
        ">",
    ],
    "6": [
        "",
        "ERROR 0XFFFFF710",
        'Processor',
        'Corr:xsfkleg..g364[7345}4__."',
        "_______________________________",
        "",
        "",
        "",
        "",
        '',
        ">"
    ],
    "7": [
        "",
        "ERROR 0XFFFFF710",
        'Processor',
        'Corr:xsfkleg..g364[7345}4__."',
        "_______________________________",
        "",
        "",
        "",
        "",
        '',
        ">"
    ]
};
// listens for projects being clicked in the 'project-section'
projects[0].addEventListener('click', function(el) {

    // used to create a child div => containing  terminal message
    function messageTranscriber(node, terminalMessage, classIndex) {
        // creates <div id="terminal-text-[index]" style="position: absolute"></div>
        var div = document.createElement("div");
        div.id = `terminal-text-${classIndex}`;
        div.style.position = "absolute";

        //cycles throught terminal messages and inserts div into parent div
        // <div id="terminal-text-[index]">
        // + <div class="terminal-text">${terminalMessage[0]}</div> 
        // ...
        //   <div class="terminal-text">${terminalMessage[9]}</div> 
        //</div>
        for (var i = 0; i < 10; i++) {
            div.innerHTML += `<div class="terminal-text">${terminalMessage[i]}</div>`;
        }
        // positions text before the terminal background-image URL
        projectBtn[classIndex].insertBefore(div, projectImg[classIndex]);
    }

    // gives an index, used to identify which element is being pressed
    var i = el.target.id.slice(-1);


    if (projectImg[i].style.opacity == "0") {
        // project image reappeats
        projectImg[i].style.animation = "0.25s fadein";
        projectImg[i].style.opacity = 1;
        // removes child div from within button of index `i`; more precisely 
        // from within {class="projectBtn"} makes the terminal message disappear
        var child = document.getElementById(`terminal-text-${i}`);
        projectBtn[i].removeChild(child);
    }
    // project image disappears
    // appends child div from within button element, given index `i`; more 
    // precisely from within {class="projectBtn"} makes the terminal message appear
    else {
        projectImg[i].style.animation = "0.25s fadeout";
        projectImg[i].style.opacity = 0;
        projectBtn[i].style.backgroundImage = "url(http://i.imgur.com/IL9nJ3d.png)";
        var terminalMsgMobile = terminalMessage[`${i}`];
        messageTranscriber(projectBtn[i], terminalMsgMobile, i);
    }
});

var scrollBox = document.getElementsByClassName("scroll-box")[0];
var whiteCover = document.getElementsByClassName("white-cover")[0];

scrollBox.addEventListener("scroll", function() {
    var viewPortWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    if (viewPortWidth < 720) {
        whiteCover.style.width = 60 + scrollBox.scrollTop / 3 + "px";
    } else if (viewPortWidth < 1366) {
        if (panelSlide1.style.opacity === "1") {
            panelSlide1.style.animation = "0.2s ease-in fadeout";
            panelSlide1.style.opacity = 0;
            projectShow1.style.visibility = "visible";
        } else {
            panelSlide1.style.animation = "0.2s ease-in fadein";
            panelSlide1.style.opacity = "1";
            projectShow1.style.visibility = "hidden";
            if (panelContent1.innerHTML.length === 0) {
                insertTerminalTextMobile(panelContent1, googleCalcMessageMobile, projectLogMarginsMobile);
            }
            if (panelContent1.innerHTML.length !== 0) {
                // panelContent1.style.animation = "0.5s ease-in 1s fadein";
                setTimeout(() => { panelContent1.style.visibility = "visible"; }, 1000);
            }
        }
        if (whiteCover.style.width === "864px") {
            whiteCover.style.width = "864px";
        } else {
            whiteCover.style.width = 112 + scrollBox.scrollTop / 2 + "px";
        }
    } else if (viewPortWidth >= 1024) {
        if (whiteCover.style.width === "864px") {
            whiteCover.style.width = "864px";
        } else {
            whiteCover.style.width = 224 + scrollBox.scrollTop + "px";
        }
    }
});