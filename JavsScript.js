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
window.onload = function () { adjust() }
window.onresize = function () { adjust() }
var runnning = false;
var chakras = [new Chakra("Muladhara: Root Chakra", "Level with tailbone", "<i>396-432<br>Hz</i>", "<i>Smell</i>", "<strong>Safe<br>Calm<br>Secure</strong>", "<strong>Anxiety<br>Guilt<br>Fear</strong>", "Connection between you and your body, physical pleasure ,is the foundation for the other chakras, high good physical health, kow is frustration")];

function adjust() {
    $("chakras").style.left = window.innerWidth / 3 - 370 + "px";
}

function loc(x) {
    $(x).style.width = "80px";
}

function clo(x) {
    $(x).style.width = "70px";
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