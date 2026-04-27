let fishReaction = "blub"
possibleReactions = {
    "screw you": 5,
    "bluble":20,
    "blub":60,
    "google degloving injury":1,
    "fish":10,
    "taxes or something idk im a fish":5,
    "feed me when the lazy dev adds it":5,
    "blubbleubelel":20,
    "bubble":100,
    "you should talk to youmtah hes cool also hes codename jelly":10,
    "you need to use agent jelly":10,
    "agent jelly is the jellyish emoji":15
    }
    weightedPossibleReactions = []
    for (i in possibleReactions) {
        counter = 0
        while (counter < possibleReactions[i]){
            weightedPossibleReactions.push(i)
            counter += 1
        }
    }
    console.log(weightedPossibleReactions)



function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let fish = new Image()
    fish.src = "cursed%20images/townofhouse.jpg"

    ctx.drawImage(fish, 0, 0, canvas.width, canvas.height);
}
setInterval(draw, 16.6);

function button() {
    const fishTranslator = document.getElementById("live fish reaction");

    fishTranslator.textContent =  "live fish reaction: " + weightedPossibleReactions[Math.floor(Math.random() * weightedPossibleReactions.length)]
}