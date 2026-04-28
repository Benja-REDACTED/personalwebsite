let animationTimer = 0
let bubbles = []
let canvas = null
possibleReactions = {
    "screw you": 5,
    "bluble":80,
    "blub":90,
    "fish":60,
    "taxes or something idk im a fish":5,
    "feed me when the lazy dev adds it":5,
    "blubbleubelel":60,
    "bubble":120,
    "you should talk to youmtah hes cool also hes codename jelly":10,
    "you need to use agent jelly":10,
    "agent jelly is the jellyish emoji":15,
    "67? im so sorry that was dumb.": 5,
    "fih":80,
    "fish? yeah fish":10,
    "what does the fox say? not this that's for sure":5,
    "there is a fish called a glass tetra that's transparent! bro really meant let me be clear": 20,
    "there is an underwater snail with an IRON shell tht lives at the bottom of the sea in water that is up to 400 america degrees": 20,
    "blue whales arent blue D: Wait yes they are :D": 20,
    "water is in the ocean :O": 20,
    "manta rays can grow up to 23 feet long! but my cousin is one and he's nice :)":20,
    "parrot fish make good pets because they are social":20,
    "ZAYNE MICHAEL STONE FROM OWENSBORO KENTUCKY PEED IN THE OCEAN ONCE!!! ....i can still taste it :(.....":20,
    "leopard sharks are very protective of their pups! chris hansen is actually a leopard shark!":1,
    "leopard sharks are very protective of their pups!":20,
    "there are only 20 vaquitas left in the world":20,
    "ELLA NEAL FROM OWENSBORO KENTUCKY LOVES MONEY":1,
    "oceans arenmt desrt":5
    }
    weightedPossibleReactions = []
    for (i in possibleReactions) {
        let counter = 0
        while (counter < possibleReactions[i]){
            weightedPossibleReactions.push(i)
            counter += 1
        }
    }
    console.log(weightedPossibleReactions)



function draw(){
    canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let fish = new Image()
    let tankBackground = new Image()
    let bubble = new Image()

    tankBackground.src= "./fihstuff/fishtank.jpg"
    fish.src = "./fihstuff/fih.png"
    bubble.src = "./fihstuff/bubble.png"


    ctx.drawImage(tankBackground, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(fish, 0.34*canvas.width, Math.sin(animationTimer/200)*canvas.height*0.3+0.375*canvas.height, 0.32*canvas.width, 0.25*canvas.height);

    counter = 0
    while (counter < bubbles.length){
        bubbles[counter][1] -= bubbles[counter][2]
        ctx.drawImage(bubble, bubbles[counter][0], bubbles[counter][1], 20, 20)

        counter += 1
    }
    animationTimer += 1
    }
setInterval(draw, 16.6);

function button() {
    const fishTranslator = document.getElementById("live fish reaction");

    fishTranslator.textContent =  "live fish reaction: " + weightedPossibleReactions[Math.floor(Math.random() * weightedPossibleReactions.length)]
    bubbles.push([Math.random()*10+0.37*canvas.width, Math.sin(animationTimer/200)*canvas.height*0.3+0.375*canvas.height, Math.random()+0.25])
}