// Loads when the document is ready.
$(document).ready(function () {
    setInterval(function(){
        textRgb("#rgbText");
    }, 1000);

});

// Generates and returns a random num based on parameter max
function randomNum(max) {
    let random = Math.floor(Math.random()*max);
    return random;
}

// Changes 
function textRgb(text) {
    let max = 256;
    $(text).css("color", "rgb(" + randomNum(max) + "," + randomNum(max) + "," + randomNum(max) + ")");
}