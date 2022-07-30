var seconds = 1200;
var t;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;

}

function countdown() {

    // starts countdown
    secondPassed();
    if (seconds != 0) { 
        seconds--;
        t = setTimeout("countdown()", 1000);
        changeColor();
        }
    // if (seconds == 0) {} else {
    //     seconds--;
    //     t = setTimeout("countdown()", 1000);
    // }
}

function cdpause() {
    // pauses countdown
    clearTimeout(t);
};

function cdreset() {
    // resets countdown
    cdpause();
    secondPassed();
};

function changeColor() {
    if (seconds <= 1200 && seconds > 300) {
    document.body.style.background = "green";
    }
    
    else if (seconds <= 900 && seconds > 60) {
    document.body.style.background = "yellow";
    }
    
    else {
    document.body.style.background = "red";
    }
}