class Chakra {
    constructor(color, name, good, bad, details, frequency, sense) {
        this.color = color;
        this.name = name;
        this.good = good;
        this.bad = bad;
        this.details = details;
        this.frequency = frequency;
        this.sense = sense;
    }
}
var active = 0;
var currentImg = "Resources/black.png";
var currentChakra = 0;
var chakras = [
    new Chakra("black", "Chakras", "<strong>Content<br>Healthy<br>Aware</strong>", "<strong>Lost<br>Empty<br>Unwell</strong>", "<li>The word chakra means 'spinning wheel', meant to represent the spinning funnels of energy pointing toward your body.<li>At best, each spins clockwise at a medium pace, exerting energy; Counter-clockwise to absorb it.<li>Each one has a healthy frequency range.<li>The frequency determines the speed, and therefore health of the chakra.", "<i>396-963<br>Hz</i>", ""),
    new Chakra("red", "Muladhara: Root Chakra", "<strong>Secure<br>Calm<br>Safe</strong>", "<strong>Fear<br>Guilt<br>Anxiety</strong>", "<li>Found level with tailbone.<li>Emits the <strong>Etheric Layer</strong>, extends 2 inches.<li>Connection to the body, directly affects physical health.<li>Connection to physical pleasure, when low you may be irritable.<li>Determines the well being/balance of the rest of the chakras.", "<i>396-432<br>Hz</i>", "<i>Smell</i>"),
    new Chakra("orange", "Svadhishthana: Sacral Chakra", "<strong>Confident<br>Creative<br>Loving</strong>", "<strong>Sensitive<br>Fakeness<br>Addiction</strong>", "<li>Found two inches under the belly button.<li>Emits the <strong>Emotional Layer</strong>, extends 3 inches from the body.<li>Connection to emotions, when low you may put on a social mask.<li>Connection to creative pleasure, directly affects sexuality.<li>Determines your control over your emotions such as anger.", "<i>417-480<br>Hz</i>", "<i>Taste</i>"),
    new Chakra("yellow", "Manipura: Solar Plexus Chakra", "<strong>Motivated<br>Confident<br>Powerful</strong>", "<strong>Helpless<br>Insecure<br>Controlling</strong>", "<li>Found under the stomach pit.<li>Emits the <strong>Mental Layer</strong>, found 3-8 inches from the body but expands.<li>Connection to confidence, directly affects manifesting your desires.<li>Connection to progressive pleasure, when low you may be irresponsible.<li>Determines good judgement.", "<i>528<br>Hz</i>", "<i>Sight</i>"),
    new Chakra("green", "Anahata: Heart Chakra", "<strong>Compassion<br>Kindness<br>Healing</strong>", "<strong>Pain<br>Loss<br>Regret</strong>", "<li>Found level with the heart.<li>Emits the <strong>Astral Layer</strong>, extends 6 inches from the body but can expand.<li>Connection to people, directly affects relationships.<li>Connection to social pleasure, when low you may feel low self worth.<li>Determines your power to give love and empathy.", "<i>528-639<br>Hz</i>", "<i>Touch</i>"),
    new Chakra("blue", "Vishuddha: Throat Chakra", "<strong>Expressive<br>Honest<br>Open</strong>", "<strong>Fake<br>Gossip<br>Uncaring</strong>", "<li>Found level with the throat.<li>Emits the Etheric Template, found as <strong>negative space for the Etheric Layer</strong>.<li>Connection to expression, when low you may be misunderstood.<li>Connection to chivalric pleasure, directly affects your need for truth and fixing things.<li>Determines how you speak and create.", "<i>639-741<br>Hz</i>", "<i>Hearing</i>"),
    new Chakra("purple", "Ajna: Third Eye Chakra", "<strong>Awareness<br>Wisdom<br>Logic</strong>", "<strong>Weak<br>Empty<br>Ignorance</strong>", "<li>Found above the eyes.<li>Emits the <strong>Celestial Layer</strong>, extends 2.5 feet.<li>Connection to worldliness, when low you may be controlled by impulse and emotion.<li>Connection to sixth senses, directly affects your true intuition.<li>Determines how you, the soul, interact with the world around you.", "<i>720-852<br>Hz</i>", "<i>Non-bodily</i>"),
    new Chakra("white", "Sahasrara: Crown Chakra", "<strong>Peace<br>Trust<br>Calm</strong>", "<strong>Addiction<br>Impulsive<br>Meaningless</strong>", "<li>Found above the head.<li>Emits the <strong>Spiritual Layer</strong>, extends 3 feet.<li>Connection to non worldliness, when low you may tend to live in the moment.<li>Connection to self awareness, provides a sense of acceptance and trust.<li>Determines how you, the soul, interact with the spiritual world.", "<i>768-963<br>Hz</i>", "<i>Non-bodily</i>")
];


window.onload = function () {
    //set page
    setChakra(0);
    adjust();
}
window.onresize = function () { adjust(); }
function $($) { return document.getElementById($); }

//keep important items visible on resizing
function adjust() {
    $("chakras").style.left = window.innerWidth / 3 - 350 + "px";
    $("info").style.right = window.innerWidth / 3 - 100 + "px";
}

//change display
function setChakra(x) {
    if (x == currentChakra) {
        x = 0;
    }
    currentChakra = x;
    //perform animation
    //necessary to clarify for later code to work
    $("info").style.width = "210px";
    $("8").style.width = "70px";
    $("7").style.width = "70px";
    $("6").style.width = "70px";
    $("5").style.width = "70px";
    $("4").style.width = "70px";
    $("3").style.width = "70px";
    $("2").style.width = "70px";
    $("1").style.width = "70px";
    $("0").style.width = "70px";
    flip(x);
}


//animate a slight tilt
function over(x) {
    active++;
    var animationa = setInterval(() => {
        if ($(x).style.width == "60px" || active != 1) {
            active--;
            clearInterval(animationa);
        }
        else {
            $(x).style.width = $(x).style.width.substring(0, $(x).style.width.length - 2) - 2 + "px";
        }
    }, 10);
}

//animate a slight un-tilt
function out(x) {
    $(x).ro
}

//flip items over
function flip(x) {
    C("flip");
    active++;
    C("active " + active);
    //shrink
    var animationc = setInterval(() => {
        C("shrink");
        //if shrink animation is done
        if ($(x).style.width == "0px" && active == 1) {
            active--;
            C("shrink done");
            clearInterval(animationc);
            //set info
            C("set info");
            $("i").style.borderColor = chakras[x].color;
            $("i").style.color = chakras[x].color;
            $("header").style.color = chakras[x].color
            $("header").innerHTML = chakras[x].name;
            $("good").innerHTML = chakras[x].good;
            $("bad").innerHTML = chakras[x].bad;
            $("details").innerHTML = chakras[x].details;
            $("frequency").innerHTML = chakras[x].frequency;
            $("sense").innerHTML = chakras[x].sense;
            //here determine set to black or set to chakra or set with top wider (for $i)
            //dontforget to animate filipping the old chakra back when x = 0

            //expand $x
            C("expand, active " + active);
            active++;
            var animationd = setInterval(() => {
                C("expand, active " + active);
                //if expand animation is done
                if ($(x).style.width == "70px" && active == 1) {
                    active--;
                    C("expand done");
                    clearInterval(animationd);
                }
                //if expand animation is not done
                else if (active == 1) {
                    C("expand continue");
                    C("expand, active " + active);
                    $(x).style.width = parseInt($(x).style.width.substring(0, $(x).style.width.length - 2)) + 2 + "px";
                    $("info").style.width = parseInt($("info").style.width.substring(0, $("info").style.width.length - 2)) + 6 + "px";
                }
                //if different animation started (cancel expand animation)
                else {
                    active--;
                    clearInterval(animationd);
                    C("EXPAND CANCEL");
                    C("expand, active " + active);
                }
            }, 10);
        }
        //if shrink animation is not done
        else if (active == 1) {
            C("shrink continue")
            $(x).style.width = $(x).style.width.substring(0, $(x).style.width.length - 2) - 2 + "px";
            C(x + " " + $(x).style.width);
            $("info").style.width = $("info").style.width.substring(0, $("info").style.width.length - 2) - 6 + "px";
            C("info " + $("info").style.width);
        }
        //if different animation started (cancel shrink animation)
        else {
            active--;
            C("SHRINK CANCEL")
            clearInterval(animationc);
        }
    }, 10);
    C("flip done");
}

function C(C = "C") {
    console.log(C);
}