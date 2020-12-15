function $($) { return document.getElementById($); }

function onLoad() {
    if (window.innerWidth < 705) {
        $("info").style.top = "880px";
    }
}

function onResize() {
    if (window.innerWidth < 705) {
        $("info").style.margin = "0 auto";
        $("info").style.top = "880px";//here
        //here redo body image, ddivs, and chakras
        //redraw info to center it (or resize width while preventing onResize to run (to avoid a loop))
        $("info").style.display = "none";
        $("info").offsetHeight;
        $("info").style.display = "block";
        window.onResize();
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