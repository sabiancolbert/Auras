class Chakra {
    constructor(color, name, good, bad, description, frequency, sense) {
        this.color = color;
        this.name = name;
        this.good = good;
        this.bad = bad;
        this.description = description;
        this.frequency = frequency;
        this.sense = sense;
    }
}

function $($) { return document.getElementById($); }
window.onload = function () { adjust(); setChakra(0); }
window.onresize = function () { adjust(); }
var currentChakra = 0;
var runnning = false;
var chakras = [
    new Chakra("black", "Chakras", "", "", "The word chakra means 'spinning wheel', meant to represent the spinning funnels of energy pointing toward your body.<br>At best, each spins clockwise at a medium pace, exerting energy; Counter-clockwise to absorb it.<br>Each one has a healthy frequency range.<br>The frequency determines the speed, and therefore health of the chakra.", "<i>396-963.<br>Hz</i>", ""),
    new Chakra("red", "Muladhara: Root Chakra", "<strong>Secure.<br>Calm.<br>Safe</strong>", "<strong>Fear.<br>Guilt.<br>Anxiety</strong>", "Found level with tailbone.<br>Emits the Etheric Layer, extends 2 inches.<br>Connection to the body, directly affects physical health.<br>Connection to physical pleasure, when bad you may be irritable.<br>Determines the well being/balance of the rest of the chakras.", "<i>396-432.<br>Hz</i>", "<i>Smell</i>"),
    new Chakra("orange", "Svadhishthana: Sacral Chakra", "<strong>Confident.<br>Creative.<br>Loving</strong>", "<strong>Sensitive.<br>Fakeness.<br>Addiction</strong>", "Found two inches under the belly button.<br>Emits the Emotional Layer, extends 3 inches from the body.<br>Connection to emotions, when bad you may put on a social mask.<br>Connection to creative pleasure, directly affects sexuality.<br>Determines your control over your emotions such as anger.", "<i>417-480.<br>Hz</i>", "<i>Taste</i>"),
    new Chakra("yellow", "Manipura: Solar Plexus Chakra", "<strong>Motivated.<br>Confident.<br>Powerful</strong>", "<strong>Helpless.<br>Insecure.<br>Controlling</strong>", "Found under the stomach pit.<br>Emits the Mental Layer, found 3-8 inches from the body but expands.<br>Connection to confidence, directly affects manifesting your desires.<br>Connection to progressive pleasure, when bad you be be irresponsible.<br>Determines good judgement.", "<i>528.<br>Hz</i>", "<i>Sight</i>"),
    new Chakra("green", "Anahata: Heart Chakra", "<strong>Compassion.<br>Kindness.<br>Healing</strong>", "<strong>Pain.<br>Loss.<br>Regret</strong>", "Found level with the heart.<br>Emits the Astral Layer, extends 6 inches from the body but can expand.<br>Connection to people, directly affects relationships.<br>Connection to social pleasure, when bad you may feel low self worth.<br>Determines your power to give love and empathy.", "<i>528-639.<br>Hz</i>", "<i>Touch</i>"),
    new Chakra("blue", "Vishuddha: Throat Chakra", "<strong>Expressive.<br>Honest.<br>Open</strong>", "<strong>Fake.<br>Gossip.<br>Uncaring</strong>", "Found level with the throat.<br>Emits the Etheric Template, found as negative space for the Etheric Layer.<br>Connection to expression, when bad you may be misunderstood.<br>Connection to chivalric pleasure, directly affects your need for truth and fixing things.<br>Determines how you speak and create.", "<i>639-741.<br>Hz</i>", "<i>Hearing</i>"),
    new Chakra("purple", "Ajna: Third Eye Chakra", "<strong>Awareness.<br>Wisdom.<br>Logic</strong>", "<strong>Weak.<br>Empty.<br>Ignorance</strong>", "Found above the eyes.<br>Emits the Celestial Layer, extends 2.5 feet.<br>Connection to worldliness, when bad you may be controlled by impulse and emotion.<br>Connection to sixth senses, directly affects your true intuition.<br>Determines how you, the soul, interact with the world around you.", "<i>720-852.<br>Hz</i>", "<i>Non-bodily</i>"),
    new Chakra("white", "Sahasrara: Crown Chakra", "<strong>Peace.<br>Trust.<br>Calm</strong>", "<strong>Addiction.<br>Impulsive.<br>Meaningless</strong>", "Found above the head.<br>Emits the Spiritual Layer, extends 3 feet.<br>Connection to non worldliness, when bad you may tend to live in the moment.<br>Connection to self awareness, provides a sense of acceptance and trust.<br>Determines how you, the soul, interact with the spiritual world.", "<i>768-963.<br>Hz</i>", "<i>Non-bodily</i>")];

function adjust() {
    $("chakras").style.left = window.innerWidth / 3 - 370 + "px";
    $("info").style.right = window.innerWidth / 3 - 100 + "px";
}

function loc(x) {
    $(x).style.width = "80px";
}

function clo(x) {
    $(x).style.width = "70px";
}

function setChakra(x) {
    if (x == currentChakra) { x = 0 }
    currentChakra = x;
    $("header").style.color = chakras[x].color//here make chakras default text (notes) and a way to get ther after clicking a chakra
    $("header").innerHTML = chakras[x].name;
    $("good").innerHTML = chakras[x].good;
    $("bad").innerHTML = chakras[x].bad;
    $("description").innerHTML = chakras[x].description;
    $("frequency").innerHTML = chakras[x].frequency;
    $("sense").innerHTML = chakras[x].sense;
}