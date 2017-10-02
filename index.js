(function() {

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.4;

    window.onscroll = function() {
        [].slice.call(parallax).forEach(function(el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();

const projectShow1 = document.getElementById("project-show-1");
const panelSlide1 = document.getElementById("panel-slide-out-1");
const panelContent = document.getElementById("panel-content");
const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor-2");
const terminalLine1 = document.getElementById("terminal-line-1");
const terminalLine2 = document.getElementById("terminal-line-2");
const underneath = document.getElementsByClassName("underneath");
let animate;
let animate1;
let animate2;
let animate3;

let animation1;
let animation2;
let animation3;

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
    "line5": "Space PortX Control Network",
    "line6": "_______________________________",
    "line7": "",
    "line8": "Progress: [=========-------] 56% Alpha 0.1.0",
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

const googleCalcMargins = {
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

projectShow1.addEventListener("click",
()=> {
    if (panelSlide1.style.height == "100%") {
        panelSlide1.style.animation = "0.5s ease-in slideinheight";
        panelContent.style.visibility = "hidden";
        panelSlide1.style.height = "";
        
    } else {
        panelSlide1.style.animation = "1s slideoutheight";
            panelSlide1.style.height = "100%";
            panelContent.style.visibility = "hidden";
        if(panelContent.innerHTML.length === 0){
            insertTerminalText(panelContent, googleCalcMessage, googleCalcMargins)
        }
        if(panelContent.innerHTML.length !== 0){
            // panelContent.style.animation = "0.5s ease-in 1s fadein";
            setTimeout(()=>{panelContent.style.visibility = "visible";}, 1000);
            }
        }
    }
)
panelSlide1.addEventListener("click",
() => {
    panelSlide1.style.animation = "0.5s ease-in slideinheight";
    panelContent.style.visibility = "hidden";
    panelSlide1.style.height = "";
}
)