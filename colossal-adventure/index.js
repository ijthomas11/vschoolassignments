const readlineSync = require("readline-sync")
const greeting = readlineSync.question("Would you like to play a game..Yes?, well let the games begin!")
const name = readlineSync.question("What is your name?")
const walk = readlineSync.question("Hello " + name + " please enter the character w to start walking: ")

function totalHP() {
    return [(+100)]
}
let HP = totalHP();

var player = {
    name: name,
    HP: HP,
    Items: ["shield", "sword", "AR-15"]
}
var attackers = ["Freddy Kreuger", "Jason", "Dracula"]

var key = readlineSync.keyIn('', {
    hideEchoBack: true,
    mask: '',
    limit: 'p'
})
if (key = 'p') {
    console.log(player)
}

Array.prototype.sample = function() {
    return attackers[Math.floor(Math.random() * attackers.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * 10);
}
let attackerCounter = getRandomInt();
console.log(attackerCounter)
while (walk === "w") {
    if (attackerCounter <= 3) {
        console.log("An enemy is near. You are about to be attacked by..." + [attackers].sample())
        break;

    } else {
        console.log("Keep walking...");
        process.exit()
    }
}

const attackOrRun = readlineSync.question("You have two options...Attack or Run:")

function getRandomIntInclusive(min, max) {
    min = Math.ceil(50)
    max = Math.ceil(100)
    return Math.floor(Math.random() * (100 - 50 + 1) + 50)
}
let attackerDamage = getRandomIntInclusive()

function attackerHP() {
    return (+100) - (+attackerDamage)
}
let attackerHp = attackerHP()

console.log(attackerDamage)
console.log(attackerHp)

while (attackOrRun === "Attack") {
    if (attackerDamage < 100) {
        console.log("You have damaged the enemy by " + attackerDamage + "." + " His health is " + attackerHp + ".")
        break;
    } else {
        console.log("You have killed the enemy. ");
        var playerItems = player.Items
        playerItems.push("rocket-launcher")
        var extraHp = 25
    }
}
let escapeChances = Math.random()
console.log(escapeChances)
while (attackOrRun === "Run") {
    if (escapeChances <= 0.5) {
        console.log("You have failed the escape and died. GAME OVER!")
        process.exit()
    } else {
        console.log("You have escaped.Keep walking..")
        break;
    }
}

let playerDamage = getRandomIntInclusive()

function playerHP() {
    return (+100) - (+playerDamage)
}
const playerHp = playerHP()

function totalHP2() {
    return (+playerHp)
}
let newHP = totalHP2()
let newPlayerHp = HP.splice(0, 1, newHP)
console.log(player)

function getRandomInt1(min, max) {
    min = Math.ceil(50)
    max = Math.ceil(100)
    return Math.floor(Math.random() * (50 - 30 + 1) + 30)
}

let attackerDamage2 = getRandomInt1()

function attackerHP2() {
    return (+100) - ((+attackerDamage) + (+attackerDamage2))
}
let attackerHp2 = attackerHP2()

if (attackerHp2 < 0) {
    console.log("You have destroyed the enemy.");
    var playerItems = player.Items
    playerItems.push("rocket-launcher", "grenade")
    var extraHp = 50

}
if (attackerHp2 > 0) {
    function playerHP2() {
        return (+100) - ((+playerDamage) + (+playerDamage2))
    }
    let playerDamage2 = getRandomInt()
    let playerHp2 = playerHP2()

    function totalHP3() {
        return (+playerHp2)
    }
    let newHP2 = totalHP3()
    let newPlayerHp2 = HP.splice(0, 1, newHP2)
}

console.log(player)
console.log(attackerDamage2)
console.log(attackerHp2)

//** still could tweak game further...i.e add in extra HP, keep game going..**