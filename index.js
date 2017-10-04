(() => {

    const parallax = document.querySelectorAll(".parallax"),
        speed = 0.4;

    window.onscroll = () => {
        [].slice.call(parallax).forEach((el, i) => {

            let windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();

//scrollBox.getBoundingClientRect().top

const projectShow1 = document.getElementById("project-show-1");
const panelSlide1 = document.getElementById("panel-slide-out-1");
const panelContent1 = document.getElementById("panel-content-1");
const projectShow2 = document.getElementById("project-show-2");
const panelSlide2 = document.getElementById("panel-slide-out-2");
const panelContent2 = document.getElementById("panel-content-2");
const projectShow3 = document.getElementById("project-show-3");
const panelSlide3 = document.getElementById("panel-slide-out-3");
const panelContent3 = document.getElementById("panel-content-3");
const projectShow4 = document.getElementById("project-show-4");
const panelSlide4 = document.getElementById("panel-slide-out-4");
const panelContent4 = document.getElementById("panel-content-4");

const projectShow5 = document.getElementById("project-show-5");
const panelSlide5 = document.getElementById("panel-slide-out-5");
const panelContent5 = document.getElementById("panel-content-5");
const projectShow6 = document.getElementById("project-show-6");
const panelSlide6 = document.getElementById("panel-slide-out-6");
const panelContent6 = document.getElementById("panel-content-6");
const projectShow7 = document.getElementById("project-show-7");
const panelSlide7 = document.getElementById("panel-slide-out-7");
const panelContent7 = document.getElementById("panel-content-7");
const projectShow8 = document.getElementById("project-show-8");
const panelSlide8 = document.getElementById("panel-slide-out-8");
const panelContent8 = document.getElementById("panel-content-8");

const underneath = document.getElementsByClassName("underneath");

const terminalMessage = {
    "line0": "",
    "line1": "WELCOME TO ANTCO INDUSTRIES (TM) TERMLINK",
    "line2": "",
    "line3": "> SET TERMINAL/INQUIRE",
    "line4": "",
    "line5": "RIT-K9000",
    "line6": "",
    "line7": "> SET FILE/PROTECTION-OWNER:RWED ACCOUNT.F",
    "line8": "> SET HALT RESTART/MAINT",
    "line9": "",
    "line10": "initializing Antco Industries (TM) MF Boot Agent v0.0.7",
    "line11": "",
    "line12": "RETROS BIOS",
    "line13": "Copyright 2017 Antco Ind.",
    "line14": "Uppermem: 64 KB",
    "line15": "Root (5A8)",
    "line16": "Maintenance Mode",
    "line17": "",
    "line18": ">RUN DEBUG/ACCOUNTS.F",
    "line19": "",
    "line20": ""
}
const googleCalcMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 23-",
    "line4": "",
    "line5": "Google Calculator Clone",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [======----------] 40% Alpha 0.1.0",
    "line9": "Last Updated: 01/10/2017",
    "line10": "Skills Gained:",
    "line11": " - Unit testing; Mocha + Chai",
    "line12": " - Integration testing of multiple features",
    "line13": "",
    "line14": "",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const pomodoroClockMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 24-",
    "line4": "",
    "line5": "Pomodoro Clock",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [================] 100% Completed",
    "line9": "Last Updated: 27/09/2017",
    "line10": "Skills Gained:",
    "line11": " - Utilized Timer.jsm built-in library",
    "line12": " - UX: Applied Gestalt Principles",
    "line13": " - UX: Maintain clarity + minimalism",
    "line14": " - UX: Intuitive Design Navigation",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const ticTacToeMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 25-",
    "line4": "",
    "line5": "Tic Tac Toe",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [================] 100% completed",
    "line9": "Last Updated: 28/10/2017",
    "line10": "Skills Gained:",
    "line11": " - Design: Utilize CSS Grid ",
    "line12": " - Applied State behaviour to game app",
    "line13": "",
    "line14": "",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const portfolioMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 21-",
    "line4": "",
    "line5": "Rick and Morty Profile Page",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [=========-------] 57% beta 0.5.0",
    "line9": "Last Updated: 02/09/2017",
    "line10": "Skills Gained:",
    "line11": " - Design: Produced Simple Parallax",
    "line14": " - Design: Responsive designs with CSS Grid",
    "line12": " - UX: Simple Gamified Features",
    "line13": " - JS: Utilize Promises - Async animations",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const epubReaderMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 26-",
    "line4": "",
    "line5": "Epub Reader",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [=---------------] 9% In Development",
    "line9": "Last Updated: 02/09/2017",
    "line10": "Contributors: Adam Collier, Anthony Tran",
    "line11": "Skills Gained:",
    "line12": " - First Collaborative software development",
    "line13": " - Design: Responsive designs with CSS Grid",
    "line14": " - UX: Simple Gamified Features",
    "line15": " - JS: Utilize Promises - Async animations",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const FCCMcrMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 27-",
    "line4": "",
    "line5": "FreeCodeCamp Manchester Web page",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [==--------------] 17% In Development",
    "line9": "Last Updated: 02/09/2017",
    "line10": "Contributors: A. Collier, A. Tran, A. Williams, James, Pete",
    "line11": "Skills Gained:",
    "line12": " - First Collaborative software development",
    "line13": " - Design: Responsive designs with CSS Grid",
    "line14": " - UX: Simple Gamified Features",
    "line15": " - JS: Utilize Promises - Async animations",
    "line16": "",
    "line17": "",
    "line18": '<a target="_blank" style="color:rgb(64, 227, 156)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">[Project Page Link]</a> ---- <a target="_blank" style="color:rgb(64, 227, 156)" href="https://github.com/anthonytranDev/JavaScript_Calculator">[Github Page]</a>',
    "line19": "",
    "line20": ">"
}
const brokenMessage = {
    "line0": "",
    "line1": "CITADEL OF RICKS UNIFIED OPERATING SYSTEM",
    "line2": "COPYRIGHT 2017 ANTCO INDUSTRIES",
    "line3": "-Server 39-",
    "line4": "",
    "line5": "ERROR 0XFFFFF710",
    "line6": 'Processor',
    "line7": 'Corr:xsfkleg..g364[7345}4__."',
    "line8": "_______________________________",
    "line9": "",
    "line10": "",
    "line11": "",
    "line12": "",
    "line13": "",
    "line14": "",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": '',
    "line19": "",
    "line20": ">"
}
const projectLogMargins = {
    "line0": "",
    "line1": "8/42",
    "line2": "11/42",
    "line3": "18/42",
    "line4": "2/42",
    "line5": "2/42",
    "line6": "2/42",
    "line7": "2/42",
    "line8": "2/42",
    "line9": "2/42",
    "line10": "2/42",
    "line11": "2/42",
    "line12": "2/42",
    "line13": "2/42",
    "line14": "2/42",
    "line15": "2/42",
    "line16": "2/42",
    "line17": "2/42",
    "line18": "2/42",
    "line19": "2/42",
    "line20": "2/42"
}
const emptyMessage = {
    "line0": "",
    "line1": "",
    "line2": "",
    "line3": "",
    "line4": "",
    "line5": "",
    "line6": "",
    "line7": "",
    "line8": "",
    "line9": "",
    "line10": "",
    "line11": "",
    "line12": "",
    "line13": "",
    "line14": "",
    "line15": "",
    "line16": "",
    "line17": "",
    "line18": "",
    "line19": "",
    "line20": ""
}
const defaultMargins = {
    "line0": "",
    "line1": "2/42",
    "line2": "2/42",
    "line3": "2/42",
    "line4": "2/42",
    "line5": "2/42",
    "line6": "2/42",
    "line7": "2/42",
    "line8": "2/42",
    "line9": "2/42",
    "line10": "2/42",
    "line11": "2/42",
    "line12": "2/42",
    "line13": "2/42",
    "line14": "2/42",
    "line15": "2/42",
    "line16": "2/42",
    "line17": "2/42",
    "line18": "2/42",
    "line19": "2/42",
    "line20": "2/42"
}


const insertTerminalText = (node, message, margins) => {
        // let isNotNode = new Promise;
        const arr = [];
        for (let i = 0; i < Object.values(message).length; i++) {
            if (message[`line${i}`] !== "") {
                node.innerHTML +=
                    `<div id="terminal-line-${i}" class="underneath">${message[`line${i}`]}</div>`
                    arr.push(i);
                }
            }
            const changeGridColumnConfig = () => {
                for (let i = 0; i < arr.length; i++) {
                    j = arr[i];
                    document.getElementById(`terminal-line-${j}`).style["grid-column"] = margins[`line${j}`];
                }
            }
            const generateTerminalDivs = new Promise((resolve, reject)=>{
                if(arr.length){
                    resolve()
                }else{
                    reject(Error("arr length of 13 was never reached"))
                }
            });
            generateTerminalDivs.then(
                ()=>{
                    changeGridColumnConfig();
                }
            ), (error) => {
                console.log(error);
            }
            node.innerHTML += `<div id="cursor" style="grid-column: 3/42; grid-row: 40/42" class="blinking"></div>`
        }

const soloDescription = document.getElementById("solo-description");
const toolsList1 = document.getElementById("tools-list-1");
const bulletPoint1 = document.getElementById("bullet-point-1");
soloDescription.addEventListener("click",
()=> {
    if (toolsList1.style.visibility === "visible") {
        bulletPoint1.style.animation = "0.7s rotateAnticlockwise";
        bulletPoint1.style["transform"] = "rotate(0deg)";
        soloDescription.style.animation = "0.5s ease-in slideinheight";
        soloDescription.style.height = "";
        toolsList1.style.visibility = "hidden";
    } else {
        bulletPoint1.style.animation = "0.5s rotateClockwise";
        bulletPoint1.style["transform"] = "rotate(90deg)";
        soloDescription.style.animation = "0.5s slideoutheight";
        soloDescription.style.height = "100%";
        setTimeout(()=>{toolsList1.style.visibility = "visible";}, 500)
        }
    }
)

const coopDescription = document.getElementById("coop-description");
const toolsList2 = document.getElementById("tools-list-2");
const bulletPoint2 = document.getElementById("bullet-point-2");
coopDescription.addEventListener("click",
()=> {
    if (toolsList2.style.visibility === "visible") {
        bulletPoint2.style.animation = "0.7s rotateAnticlockwise";
        bulletPoint2.style["transform"] = "rotate(0deg)";
        coopDescription.style.animation = "0.5s ease-in slideinheight";
        coopDescription.style.height = "";
        toolsList2.style.visibility = "hidden";
    } else {
        bulletPoint2.style.animation = "0.5s rotateClockwise";
        bulletPoint2.style["transform"] = "rotate(90deg)";
        coopDescription.style.animation = "0.5s slideoutheight";
        coopDescription.style.height = "100%";
        setTimeout(()=>{toolsList2.style.visibility = "visible";}, 500)
        }
    }
)

panelContent1.addEventListener("click",
()=> {
    if (panelSlide1.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide1.style.animation = "0.2s ease-in fadeout";
        panelSlide1.style.opacity = 0;
        projectShow1.style.visibility = "visible";
    } else {
            panelSlide1.style.animation = "0.2s ease-in fadein";
            panelSlide1.style.opacity = "1";
            projectShow1.style.visibility = "hidden";
        if(panelContent1.innerHTML.length === 0){
            insertTerminalText(panelContent1, googleCalcMessage, projectLogMargins)
        }
        if(panelContent1.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent1.style.visibility = "visible";}, 1000);
            }
        }
    }
)
panelContent2.addEventListener("click",
()=> {
    if (panelSlide2.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide2.style.animation = "0.2s ease-in fadeout";
        panelSlide2.style.opacity = 0;
        projectShow2.style.visibility = "visible";
    } else {
            panelSlide2.style.animation = "0.2s ease-in fadein";
            panelSlide2.style.opacity = "1";
            projectShow2.style.visibility = "hidden";
        if(panelContent2.innerHTML.length === 0){
            insertTerminalText(panelContent2, pomodoroClockMessage, projectLogMargins)
        }
        if(panelContent2.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent2.style.visibility = "visible";}, 1000);
            }
        }
    }
)

panelContent3.addEventListener("click",
()=> {
    if (panelSlide3.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide3.style.animation = "0.2s ease-in fadeout";
        panelSlide3.style.opacity = 0;
        projectShow3.style.visibility = "visible";
    } else {
            panelSlide3.style.animation = "0.2s ease-in fadein";
            panelSlide3.style.opacity = "1";
            projectShow3.style.visibility = "hidden";
        if(panelContent3.innerHTML.length === 0){
            insertTerminalText(panelContent3, ticTacToeMessage, projectLogMargins)
        }
        if(panelContent3.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent3.style.visibility = "visible";}, 1000);
            }
        }
    }
)

panelContent4.addEventListener("click",
()=> {
    if (panelSlide4.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide4.style.animation = "0.2s ease-in fadeout";
        panelSlide4.style.opacity = 0;
        projectShow4.style.visibility = "visible";
    } else {
            panelSlide4.style.animation = "0.2s ease-in fadein";
            panelSlide4.style.opacity = "1";
            projectShow4.style.visibility = "hidden";
        if(panelContent4.innerHTML.length === 0){
            insertTerminalText(panelContent4, portfolioMessage, projectLogMargins)
        }
        if(panelContent4.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent4.style.visibility = "visible";}, 1000);
            }
        }
    }
)

panelContent5.addEventListener("click",
()=> {
    if (panelSlide5.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide5.style.animation = "0.2s ease-in fadeout";
        panelSlide5.style.opacity = 0;
        projectShow5.style.visibility = "visible";
    } else {
            panelSlide5.style.animation = "0.2s ease-in fadein";
            panelSlide5.style.opacity = "1";
            projectShow5.style.visibility = "hidden";
        if(panelContent5.innerHTML.length === 0){
            insertTerminalText(panelContent5, epubReaderMessage, projectLogMargins)
        }
        if(panelContent5.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent5.style.visibility = "visible";}, 1000);
            }
        }
    }
)
panelContent6.addEventListener("click",
()=> {
    if (panelSlide6.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide6.style.animation = "0.2s ease-in fadeout";
        panelSlide6.style.opacity = 0;
        projectShow6.style.visibility = "visible";
    } else {
            panelSlide6.style.animation = "0.2s ease-in fadein";
            panelSlide6.style.opacity = "1";
            projectShow6.style.visibility = "hidden";
        if(panelContent6.innerHTML.length === 0){
            insertTerminalText(panelContent6, FCCMcrMessage, projectLogMargins)
        }
        if(panelContent6.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent6.style.visibility = "visible";}, 1000);
            }
        }
    }
)
panelContent7.addEventListener("click",
()=> {
    if (panelSlide7.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide7.style.animation = "0.2s ease-in fadeout";
        panelSlide7.style.opacity = 0;
        projectShow7.style.visibility = "visible";
    } else {
            panelSlide7.style.animation = "0.2s ease-in fadein";
            panelSlide7.style.opacity = "1";
            projectShow7.style.visibility = "hidden";
        if(panelContent7.innerHTML.length === 0){
            insertTerminalText(panelContent7, brokenMessage, projectLogMargins)
        }
        if(panelContent7.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent7.style.visibility = "visible";}, 1000);
            }
        }
    }
)
panelContent8.addEventListener("click",
()=> {
    if (panelSlide8.style.opacity === "1") {
        console.log("confirm button works")
        panelSlide8.style.animation = "0.2s ease-in fadeout";
        panelSlide8.style.opacity = 0;
        projectShow8.style.visibility = "visible";
    } else {
            panelSlide8.style.animation = "0.2s ease-in fadein";
            panelSlide8.style.opacity = "1";
            projectShow8.style.visibility = "hidden";
        if(panelContent8.innerHTML.length === 0){
            insertTerminalText(panelContent8, brokenMessage, projectLogMargins)
        }
        if(panelContent8.innerHTML.length !== 0){
            // panelContent1.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent8.style.visibility = "visible";}, 1000);
            }
        }
    }
)
const progressBox = document.getElementById("progress-box");
const whiteCover = document.getElementById("white-cover");

progressBox.addEventListener("scroll", () => {
    if(whiteCover.style.width === "864px" ){
        whiteCover.style.width = "864px";
    }else{
        whiteCover.style.width = 224 + progressBox.scrollTop + "px";
    }
});

// progressBox1.scrollTop