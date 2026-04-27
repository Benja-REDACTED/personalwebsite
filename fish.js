let fishReaction = "blub"
let animationTimer = 0
possibleReactions = {
    "screw you": 5,
    "bluble":20,
    "blub":60,
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
    let tankBackground = new Image()
    tankBackground.src= "./fihstuff/fishtank.jpg"
    fish.src = "./fihstuff/fih.png"

    ctx.drawImage(tankBackground, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(fish, 0.5*canvas.width - 0.16*canvas.width, Math.sin(animationTimer/200)*canvas.height*0.25+0.32*canvas.height, 0.32*canvas.width, 0.25*canvas.height);
    console.log(Math.sin(animationTimer/200)*canvas.width*0.6)

    animationTimer += 3
    }
setInterval(draw, 16.6);

function button() {
    const fishTranslator = document.getElementById("live fish reaction");

    fishTranslator.textContent =  "live fish reaction: " + weightedPossibleReactions[Math.floor(Math.random() * weightedPossibleReactions.length)]
}