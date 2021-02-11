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
    adjust();
    //use JavaScript for these so changes made only have to be made in the Chakras[] array
    $("i").style.color = chakras[0].color;
    $("header").style.color = chakras[0].color
    $("header").innerHTML = chakras[0].name;
    $("good").innerHTML = chakras[0].good;
    $("bad").innerHTML = chakras[0].bad;
    $("description").innerHTML = chakras[0].description;
    $("frequency").innerHTML = chakras[0].frequency;
    $("sense").innerHTML = chakras[0].sense;
}
window.onresize = function () { adjust(); }
function $($) { return document.getElementById($); }

//keep important items visible on resizing
function adjust() {
    $("chakras").style.left = window.innerWidth / 3 - 350 + "px";
    $("info").style.right = window.innerWidth / 3 - 100 + "px";
}

//change displayed information
function setChakra(x) {
    //revert to default information if same chakra was selected
    if (x == currentChakra) { x = 0 }
    //display determined information
    $("i").style.color = chakras[x].color;
    $("header").style.color = chakras[x].color
    $("header").innerHTML = chakras[x].name;
    $("good").innerHTML = chakras[x].good;
    $("bad").innerHTML = chakras[x].bad;
    $("description").innerHTML = chakras[x].description;
    $("frequency").innerHTML = chakras[x].frequency;
    $("sense").innerHTML = chakras[x].sense;
    //change active chakra display
    {
        //necessary to clarify for javascript
        $(x).style.width = "70px";
        $(currentChakra).style.width = "70px";
        //shrink animation
        var animation = setInterval(() => {
            if ($(x).style.width == "0px") {
                clearInterval(animation);
                //change displays
                $(currentChakra).src = currentImg;
                currentImg = $(x).src;
                $(x).src = "Resources/black.png";
                //grow animation
                var animation2 = setInterval(() => {
                    if ($(x).style.width == "70px") {
                        //done
                        clearInterval(animation2);
                        //remember new chakra
                        currentChakra = x;
                    }
                    else {
                        $(x).style.width = parseInt($(x).style.width.substring(0, $(x).style.width.length - 2)) + 2 + "px";
                        $(currentChakra).style.width = parseInt($(currentChakra).style.width.substring(0, $(currentChakra).style.width.length - 2)) + 2 + "px";
                    }
                }, 1);
            }
            else {
                $(x).style.width = $(x).style.width.substring(0, $(x).style.width.length - 2) - 2 + "px";
                $(currentChakra).style.width = $(currentChakra).style.width.substring(0, $(currentChakra).style.width.length - 2) - 2 + "px";
            }
        }, 1);
    }
}
function hover(element, x) {
    $(element).style.width = x;
}