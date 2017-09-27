(function() {

})();
const progressBar = document.getElementById("progress-bar-2");
const progress = document.getElementById("progress-bar");


const labelLevel = document.getElementById("label");
const ball1 = document.getElementById("ball-1");
const ball2 = document.getElementById("ball-2");
const ball3 = document.getElementById("ball-3");
const ball4 = document.getElementById("ball-4");
const imgCircle = document.getElementById("img-circle");
const msg1 = document.getElementById("pop-up-msg-1");
const msg2 = document.getElementById("pop-up-msg-2");
const msg3 = document.getElementById("pop-up-msg-3");
const msg4 = document.getElementById("pop-up-msg-4");
const scrollingDetected = () => {

}
window.addEventListener("scroll", () => {

    do {
        scrollLength = window.pageYOffset / 31;
        progressBar.style.width = scrollLength + "%";
        if (scrollLength < 0) {
            ball1.style.visibility = "hidden";
            ball1.style.animation = "fadeout .5s";
        } else {
            msg1.style.visibility = "visible";
            msg1.style.animation = "fadein 1s";
            ball1.style.visibility = "visible";
            ball1.style.animation = "fadein .5s";
            imgCircle.innerHTML = '<img id="img-average-morty" class="img-morty" src="http://screenprism.com/assets/img/article/Morty.JPG" alt="Average Morty"><div id="img-frame"><div id="label">LEVEL 0</div>'
        }
        if (scrollLength < 31) {
            msg2.style.animation = "fadeout 1s";
            msg2.style.visibility = "hidden";
            ball2.style.visibility = "hidden";
            ball2.style.animation = "fadeout .5s";
        } else {
            // msg1.style.visibility = "visible";
            msg1.style.animation = "fadeout 1s";
            msg1.style.visibility = "hidden";
            msg2.style.visibility = "visible";
            msg2.style.animation = "fadein 1s";
            ball2.style.visibility = "visible";
            ball2.style.animation = "fadein .5s";
            imgCircle.innerHTML = '<img id="img-shop-assistant-morty" class="img-morty" src="http://www.nerdly.co.uk/wp-content/uploads/2017/09/r-and-m-307.jpg" alt="Average Morty"><div id="img-frame"><div id="label">LEVEL 1</div></div>';
        }
        if (scrollLength < 64) {
            msg3.style.visibility = "hidden";
            msg3.style.animation = "fadeout 1s";
            ball3.style.visibility = "hidden";
            ball3.style.animation = "fadeout .5s";
        } else {
            msg2.style.animation = "fadeout 1s";
            msg2.style.visibility = "hidden";
            msg3.style.animation = "fadein 1s";
            msg3.style.visibility = "visible";
            ball3.style.visibility = "visible";
            ball3.style.animation = "fadein .5s";
            imgCircle.innerHTML = '<img id="img-detective-morty" class="img-morty" src="https://www.watchcartoononline.io/thumbs/rick-and-morty-season-3-episode-7-the-ricklantis-mixup.jpg" alt="Average Morty"><div id="img-frame"><div id="label">LEVEL 2</div></div>';
        }
        if (scrollLength < 96) {
            msg4.style.animation = "fadeout 1s";
            msg4.style.visibility = "hidden";
            ball4.style.visibility = "hidden";
            ball4.style.animation = "fadeout .5s";
        } else {
            msg3.style.animation = "fadeout 1s";
            msg3.style.visibility = "hidden";
            msg4.style.visibility = "visible";
            msg4.style.animation = "fadein 1s";
            ball4.style.visibility = "visible";
            ball4.style.animation = "fadein .5s";
            imgCircle.innerHTML = '<img id="img-evil-morty" class="img-morty" src="https://i.imgur.com/zV1X8ULr.png" alt="Average Morty"><div id="img-frame"><div id="label">LEVEL 3</div></div>';
        }

    } while (progressBar.style.width < 0.98);




    labelLevel.innerHTML = progressBar.style.width
})