function $($) { return document.getElementById($); }
var runnning = false;
window.onload = function () { adjust(); }

window.onresize = function () { adjust(); }

function adjust() {
    if (window.innerWidth < 750) {
        $("layers").style.right = "25%";

        $("chakras").style.width = "50%";
        $("chakras").style.left = "50%";

        $("info").style.top = "880px";
        $("info").style.height = "200px";
        $("info").style.width = window.innerWidth - 140 + "px";
    }
    else {
        $("layers").style.right = "50%";

        $("chakras").style.width = "33%";
        $("chakras").style.left = "33%";

        $("info").style.top = "0";
        $("info").style.height = "750px";
        $("info").style.width = "200px";
    }
}

function loc(x) {
    $(x).style.backgroundColor = x;
    $(x).style.width = "250px";
}

function clo(x) {
    $(x).style.backgroundColor = "transparent";
    $(x).style.width = "57px";
}