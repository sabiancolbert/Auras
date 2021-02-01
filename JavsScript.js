function $($) { return document.getElementById($); }
var runnning = false;
window.onload = function () { adjust(); }

window.onresize = function () { adjust(); }

function adjust() {
    if (window.innerWidth < 750) {
        $("layers").style.right = "30%";

        $("chakras").style.width = "50%";
        $("chakras").style.left = "50%";

        $("info").style.top = "880px";
        $("info").style.height = "250px";
        $("info").style.width = "100%";
    }
    else {

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