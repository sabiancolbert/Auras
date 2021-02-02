class Chakra {
    constructor(name, found, frequency, sense, good, bad, description) {
        this.name = name;
        this.found = found;
        this.frequency = frequency;
        this.sense = sense;
        this.good = good;
        this.bad = bad;
        this.description = description;
    }
}

function $($) { return document.getElementById($); }
var runnning = false;
var chakras = [new Chakra("Muladhara: Root Chakra", "Level with tailbone", "396-432<br>Hz", "Smell", "Safe<br>Calm<br>Secure", "Fear<br>Anxiety<br>Guilt", "Connection between you and your body, physical pleasure ,is the foundation for the other chakras, high good physical health, kow is frustration")];
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

function setChakra(x) {
    $("header").innerHTML = chakras[x].name;
    $("found").innerHTML = chakras[x].found;
    $("good").innerHTML = chakras[x].good;
    $("bad").innerHTML = chakras[x].bad;
    $("frequency").innerHTML = chakras[x].frequency;
    $("sense").innerHTML = chakras[x].sense;
    $("description").innerHTML = chakras[x].description;
}