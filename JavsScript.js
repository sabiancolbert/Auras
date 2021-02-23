
function $($) { return document.getElementById($); }
class Chakra {
    constructor(color, name, good, bad, details, frequency, sense, yoga, oils, crystals, description) {
        this.color = color;
        this.name = name;
        this.good = good;
        this.bad = bad;
        this.details = details;
        this.frequency = frequency;
        this.sense = sense;
        this.yoga = yoga;
        this.oils = oils;
        this.crystals = crystals;
        this.description = description;
    }
}
//to prevent animation compounding
var active = 0;
//to switch chakras
var stopPoint = window.innerWidth * .7 - 105;
var set;
var oldImg = "Resources/black.png";
var oldChakra = 0;
var chakras = [
    new Chakra("black", "Chakras", "Content<br>Healthy<br>Aware", "Lost<br>Empty<br>Unwell", "<li>The word chakra means 'spinning wheel', meant to represent the spinning funnels of energy pointing toward your body.<li>At best, each spins clockwise at a medium pace, exerting energy; Counter-clockwise to absorb it.<li>Each one has a healthy frequency range.<li>The frequency determines the speed, and therefore health of the chakra.", "396-963<br>Hz", "",
        "yog", "oil", "cr", "chakras interact with different parts of who you are and how you feel, such as anger or calm or giving comfort when out of balance, you can experience things like physical illness, depression, overexcitement, and a whole bunch of other things part of chakra management is  not only keeping enough of each chakra, but not too much at a time eitherthere  are ways to heal chakras, such as certain yoga poses, crystals, oils, herbs, verbal sounds, and other chakras - specific practiceseach of these chakras emit an aura layer, and with practice you can sense feel and even see them"),
    new Chakra("red", "Muladhara: Root Chakra", "Secure<br>Calm<br>Safe", "Fear<br>Guilt<br>Anxiety", "<li>Found level with tailbone.<li>Emits the Etheric Layer, extends 2 inches.<li>Connection to the body, directly affects physical health.<li>Connection to physical pleasure, when low you may be irritable.<li>Determines the well being/balance of the rest of the chakras.", "396-432<br>Hz", "Smell",
        "", "", "", "sense of stability safe secure grounded,physical health/bodily needs:food water shelter money safetypleasure  instincts;stressing over  worldly problems, fear, guilt, trauma;feel powerless, stop keeping up with basic needs, irratible, overeatting, hoarding, greed;PHYSICAL SYMPTOMS;breathing and breathe excersises is the best fix;as you do, feel the red roots connecting with the earthmaybe go barefoot on the dirt;necessary to balance other chakras,;your soul sits here when you're in the moment, and moves up to the third eye when you open it,"),
    new Chakra("orange", "Svadhishthana: Sacral Chakra", "Confident<br>Creative<br>Loving", "Sensitive<br>Fakeness<br>Addiction", "<li>Found two inches under the belly button.<li>Emits the Emotional Layer, extends 3 inches from the body.<li>Connection to emotions, when low you may put on a social mask.<li>Connection to creative pleasure, directly affects sexuality.<li>Determines your control over your emotions such as anger.", "417-480<br>Hz", "Taste",
        "", "", "", ""),
    new Chakra("yellow", "Manipura: Solar Plexus Chakra", "Motivated<br>Confident<br>Powerful", "Helpless<br>Insecure<br>Controlling", "<li>Found under the stomach pit.<li>Emits the Mental Layer, found 3-8 inches from the body but expands.<li>Connection to confidence, directly affects manifesting your desires.<li>Connection to progressive pleasure, when low you may be irresponsible.<li>Determines good judgement.", "528<br>Hz", "Sight",
        "", "", "", ""),
    new Chakra("green", "Anahata: Heart Chakra", "Compassion<br>Kindness<br>Healing", "Pain<br>Loss<br>Regret", "<li>Found level with the heart.<li>Emits the Astral Layer, extends 6 inches from the body but can expand.<li>Connection to people, directly affects relationships.<li>Connection to social pleasure, when low you may feel low self worth.<li>Determines your power to give love and empathy.", "528-639<br>Hz", "Touch",
        "", "", "", ""),
    new Chakra("blue", "Vishuddha: Throat Chakra", "Expressive<br>Honest<br>Open", "Fake<br>Gossip<br>Uncaring", "<li>Found level with the throat.<li>Emits the Etheric Template, found as negative space for the Etheric Layer.<li>Connection to expression, when low you may be misunderstood.<li>Connection to chivalric pleasure, directly affects your need for truth and fixing things.<li>Determines how you speak and create.", "639-741<br>Hz", "Hearing",
        "", "", "", ""),
    new Chakra("purple", "Ajna: Third Eye Chakra", "Awareness<br>Wisdom<br>Logic", "Weak<br>Empty<br>Ignorance", "<li>Found above the eyes.<li>Emits the Celestial Layer, extends 2.5 feet.<li>Connection to worldliness, when low you may be controlled by impulse and emotion.<li>Connection to sixth senses, directly affects your true intuition.<li>Determines how you, the soul, interact with the world around you.", "720-852<br>Hz", "Non-bodily",
        "", "", "", ""),
    new Chakra("white", "Sahasrara: Crown Chakra", "Peace<br>Trust<br>Calm", "Addiction<br>Impulsive<br>Meaningless", "<li>Found above the head.<li>Emits the Spiritual Layer, extends 3 feet.<li>Connection to non worldliness, when low you may tend to live in the moment.<li>Connection to self awareness, provides a sense of acceptance and trust.<li>Determines how you, the soul, interact with the spiritual world.", "768-963<br>Hz", "Non-bodily",
        "", "", "", ""),
    new Chakra("info", "", "", "", "", "", "", "", "", "", "")
];

window.onload = function () {
    //to make later code work
    $("chakras").style.left = window.innerWidth / 3 - 350 + "px";
    $("info").style.left = "-230px";
    $("8").style.width = "70px";
    $("7").style.width = "70px";
    $("6").style.width = "70px";
    $("5").style.width = "70px";
    $("4").style.width = "70px";
    $("3").style.width = "70px";
    $("2").style.width = "70px";
    $("1").style.width = "70px";
    $("0").style.width = "70px";
    //set page
    setChakra(0);
}

//keep important things visible for different window sizes
window.onresize = function () {
    if (active == 0) {
        $("chakras").style.left = window.innerWidth / 3 - 350 + "px";
        if (set == 9) {
            $("info").style.width = .98 * window.innerWidth - 55 + "px"
        } else {
            $("info").style.left = window.innerWidth * .7 - 130 + "px";
        }
    }
}

//animate a slight tilt
function over(chakra) {
}

//animate a slight un-tilt
function out(chakra) {
}

//slide to next display
function setChakra(chakra) {
    //if returning from a description page
    if (set == 9) {
        chakra = oldChakra;
        oldChakra = 9;
    }
    //set chakra buttons visibility
    if (chakra == 8 && oldChakra != 8) {
        $("7").hidden = true;
        $("6").hidden = true;
        $("5").hidden = true;
        $("4").hidden = true;
        $("3").hidden = true;
        $("2").hidden = true;
        $("1").hidden = true;
    }
    else {
        $("7").hidden = false;
        $("6").hidden = false;
        $("5").hidden = false;
        $("4").hidden = false;
        $("3").hidden = false;
        $("2").hidden = false;
        $("1").hidden = false;
    }
    //slide $info off screen (and flip chakra(s))
    active++;
    var animationc = setInterval(() => {
        //if different animation started (cancel slide)
        if (active != 1) {
            active--;
            clearInterval(animationc);
        }
        //if $info is on screen (slide is not done)
        else if ($(chakra).style.width != "0px") {
            $("info").style.left = $("info").style.left.substring(0, $("info").style.left.length - 2) - 50 + "px";
            $(chakra).style.width = $(chakra).style.width.substring(0, $(chakra).style.width.length - 2) - 2 + "px";
            if (chakra != oldChakra) {
                $(oldChakra).style.width = $(oldChakra).style.width.substring(0, $(oldChakra).style.width.length - 2) - 2 + "px";
            }
        }
        //if $info is off screen (slide is done)
        else {
            active--;
            clearInterval(animationc);
            //change chakra buttons
            if (chakra == oldChakra) {
                //chakra > default
                set = 0;
                $(chakra).src = oldImg;
            }
            else if (oldChakra == 0) {
                //default > chakra
                set = chakra;
                oldImg = $(chakra).src;
                $(chakra).src = "Resources/black.png";
            }
            else {
                //chakra > chakra
                set = chakra;
                $(oldChakra).src = oldImg;
                oldImg = $(chakra).src;
                $(chakra).src = "Resources/black.png";
            }
            //change $info
            if (oldChakra != 8 && chakra == 8) {
                //if to a description page
                stopPoint = .01 * window.innerWidth;
                $("info").style.width = .98 * window.innerWidth - 55 + "px";
                $("header").innerHTML = chakras[oldChakra].name + " Description";
                $("left").innerHTML = chakras[oldChakra].yoga;
                $("middle").innerHTML = chakras[oldChakra].oils;
                $("right").innerHTML = chakras[oldChakra].crystals;
                $("information").innerHTML = chakras[oldChakra].description;
                $("frequency").innerHTML = "";
                $("sense").innerHTML = "";
            }
            else {
                //if to a chakra page
                stopPoint = window.innerWidth * .7 - 105;
                $("info").style.width = "210px";
                $("i").style.borderColor = chakras[set].color;
                $("i").style.color = chakras[set].color;
                $("header").style.color = chakras[set].color;
                $("header").innerHTML = chakras[set].name;
                $("left").innerHTML = chakras[set].good;
                $("middle").innerHTML = "";
                $("right").innerHTML = chakras[set].bad;
                $("information").innerHTML = chakras[set].details;
                $("frequency").innerHTML = chakras[set].frequency;
                $("sense").innerHTML = chakras[set].sense;
            }

            //slide $info on screen (and flip chakra(s) back)
            $("info").style.left = window.innerWidth + "px";
            active++;
            var animationd = setInterval(() => {
                //if different animation started (cancel slide)
                if (active != 1) {
                    active--;
                    clearInterval(animationd);
                }
                //if $info is off screen (slide not done)
                else if ($(chakra).style.width != "70px") {
                    if (parseInt($("info").style.left.substring(0, $("info").style.left.length - 2)) > stopPoint) {
                        $("info").style.left = $("info").style.left.substring(0, $("info").style.left.length - 2) - 25 + "px";
                    }
                    $(chakra).style.width = parseInt($(chakra).style.width.substring(0, $(chakra).style.width.length - 2)) + 2 + "px";
                    if (oldChakra != chakra) {
                        $(oldChakra).style.width = parseInt($(oldChakra).style.width.substring(0, $(oldChakra).style.width.length - 2)) + 2 + "px";
                    }
                }
                //if $info is on screen (slide is done)
                else {
                    active--;
                    clearInterval(animationd);
                    if (set == 8) {
                        //if to a description page
                        set = 9;
                        $("info").style.left = "1%";
                    }
                    else {
                        //if to a chakra page
                        oldChakra = set;
                        $("info").style.left = window.innerWidth * .7 - 130 + "px";
                    }
                }
            }, 3);
        }
    }, 3);
}

function C(C = "C") {
    console.log(C);
}