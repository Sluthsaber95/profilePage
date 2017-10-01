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
const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor-2");
const terminalLine1 = document.getElementById("terminal-line-1");
const terminalLine2 = document.getElementById("terminal-line-2");
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


const insertTerminalText = (node, message, margins = defaultMargins) => {
        // let isNotNode = new Promise;
        const arr = [];

        for (let i = 0; i < Object.values(message).length; i++) {
            if (terminalMessage[`line${i}`] !== "") {
                node.innerHTML +=
                    `<div id="terminal-line-${i}" class="underneath">${terminalMessage[`line${i}`]}</div>`
                    arr.push(i);
                }
            }
            const changeGridColumnConfig = () => {
                for (let i = 0; i < arr.length; i++) {
                    j = arr[i];
                    document.getElementById(`terminal-line-${j}`).style["grid-column"] = margins[`line${j}`];
                }
            }
            let promise = new Promise((resolve, reject)=>{
                if(arr.length){
                    resolve()
                }else{
                    reject(Error("arr length of 13 was never reached"))
                }
            });
            promise.then(
                ()=>{
                    changeGridColumnConfig();
                }
            ), (error) => {
                console.log(error);
            }
    }


insertTerminalText(panelSlide1, terminalMessage);

// projectShow1.addEventListener("click",
//     function() {
//         if (panelSlide1.style.height == "100%") {
//             panelSlide1.style.animation = "1s slideinheight";
//             panelSlide1.style.height = "";
//             cursor.style.visibility = "hidden";
//             terminalLine1.style.visibility = "hidden";
//             cursor2.style.visibility = "hidden";
//             terminalLine2.style.visibility = "hidden";
//         } else {
//             panelSlide1.style.animation = "1s slideoutheight";
//             panelSlide1.style.height = "100%"
//             panelSlide1.style.height = "100%";
//             animate = setTimeout(() => {
//                 cursor.style.backgroundColor = "rgb(49, 254, 131)";
//                 cursor.style.animation = "1s blinkmove linear";
//                 terminalLine1.style.color = "rgb(64, 227, 156)"
//                 terminalLine1.style.animation = "type 1s steps(60, end)";
//             }, 1000);
//             animation1 = setTimeout(() => {
//                 cursor.style.animation = "1s blink infinite";
//                 cursor.style.left = "500px";
//             }, 2000);
//             animation2 = setTimeout(() => {
//                 cursor.style.visibility = "hidden";
//                 cursor2.style.animation = "1s blinkmove2 linear";
//                 terminalLine2.style.animation = "type 1s steps(60, end)";
//             }, 3000);
//             animation3 = setTimeout(() => {
//                 terminalLine2.style.color = "rgb(64, 227, 156)";
//                 cursor2.style.animation = "1s blink infinite";
//                 cursor2.style.left = "435px";

//             }, 4000);
//         }
//     }

// )
// panelSlide1.addEventListener("click",
//     () => {
//         clearTimeout(animation);
//         clearTimeout(animation1);
//         clearTimeout(animation2);
//         clearTimeout(animation3);
//         cursor.style.visibility = "hidden";
//         terminalLine1.style.visibility = "hidden";
//         cursor2.style.visibility = "hidden";
//         terminalLine2.style.visibility = "hidden";
//         // panelSlide1.style.animation = "1s slideoutheight";
//         panelSlide1.style.height = "";
//         animation = animateObj.stop();
//     }
// )