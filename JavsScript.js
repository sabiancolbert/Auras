function $($) { return document.getElementById($); }
var runnning = false;

function onLoad() {
    if (window.innerWidth < 705) {
        $("info").style.margin = "0 auto";
        $("info").style.top = "880px";//here
        //here redo body image, ddivs, and chakras
        $("imgs").style.position = "absolute";
        $("imgs").style.right = "0";
        //here mobile is too wide
        document.html.style.width = innerWidth + "px";
    }
}

function onResize() {
    if (window.innerWidth < 705) {//here copy above
    }
}

function loc(x) {
    $(x).style.backgroundColor = x;
    $(x).style.width = "150px";
}

function clo(x) {
    $(x).style.backgroundColor = "transparent";
    $(x).style.width = "50px";
}