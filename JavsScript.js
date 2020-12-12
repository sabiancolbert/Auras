function $($) { return document.getElementById($); }

function loc(x) {
    $(x).style.backgroundColor = x;
    $(x).style.width = "150px";
}

function clo(x) {
    $(x).style.backgroundColor = "transparent";
    $(x).style.width = "50px";
}