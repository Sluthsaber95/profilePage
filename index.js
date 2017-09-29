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


const rickFalling = document.getElementById("img-rick-fall");