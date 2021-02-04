class Chakra {
    constructor(name, frequency, sense, good, bad, description) {
        this.name = name;
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
var chakras = [
    new Chakra("Muladhara: Root Chakra", "<i>396-432<br>Hz</i>", "<i>Smell</i>", "<strong>Safe<br>Calm<br>Secure</strong>", "<strong>Anxiety<br>Guilt<br>Fear</strong>", "Level with tailbone; Connection between you and your body, physical pleasure ,is the foundation for the other chakras, high good physical health, kow is frustration"),
    new Chakra("Svadhishthana: Sacral Chakra", "<i>417-480<br>Hz</i>", "<i>Taste</i>", "<strong>Loving<br>Creative<br>Confident</strong>", "<strong>Sensitive<br>Fakeness<br>Addiction</strong>", "level with two inches under your belly button;Connection between you and your emotions, creative pleasure; you may put on a mask infront of others when low, determines your control over your emotions such as anger, relates to sexuality"),
    new Chakra("Manipura: Solar Plexus Chakra", "<i>528<br>Hz</i>", "<i>Sight</i>", "<strong>Confident<br>Motivated<br>Powerful</strong>", "<strong>Insecure<br>Helpless<br>Controlling</strong>", "level with below the stomach pit;connects you with your confidence,  pleasure in accomplishments;maybe irresponsible when low, determines good judgement, helps you manifest your desires"),
    new Chakra("Anahata: Heart Chakra", "<i>528-639<br>Hz</i>", "<i>Touch</i>", "<strong>Compassion<br>Kindness<br>Healing</strong>", "<strong>Loss<br>Regret<br>Pain</strong>", " level with the heart;is the connection with other people, pleasure in relationships;low self worth when low, power to give empathy and love,relationships rely on it"),
    new Chakra("Vishuddha: Throat Chakra", "<i>639-741<br>Hz</i>", "<i>Hearing</i>", "<strong>Expressive<br>Honest<br>Open</strong>", "<strong>Gossip<br>Fake<br>Uncaring</strong>", "level with the throat ; connection between you and your expression , creativity in relationships;can be your writing, voice, or anything that expresses your ideas; involved with truth and fixing things; gives glear communication withougj misunderstanding "),
    new Chakra("Ajna: Third Eye Chakra", "<i>720-852<br>Hz</i>", "<i>Non-bodily</i>", "<strong>Awareness<br>Wisdom<br>Logic</strong>", "<strong>Ignorance<br>Empty<br>Weak</strong>", "level with above the eyes;connects you, the soul, to the world, usually the source of an honest sixth sense;without it, your emotions and desires can better control you; Allows you to tap into your true intuition;"),
    new Chakra("Sahasrara: Crown Chakra", "<i>768-963<br>Hz</i>", "<i>Non-bodily</i>", "<strong>Peace<br>Calm<br>Trust</strong>", "<strong>Meaningless<br>Impulsive<br>Addiction</strong>", "Above the head ;connects you to the spiritual, constitutes your awareness as a soul;relation to the greater,  you may live in the moment with bad, things seem to be ok with good, is associated with your self awareness as a being, helps relieve obsessions")];

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
    $("good").innerHTML = chakras[x].good;
    $("bad").innerHTML = chakras[x].bad;
    $("frequency").innerHTML = chakras[x].frequency;
    $("sense").innerHTML = chakras[x].sense;
    $("description").innerHTML = chakras[x].description;
}