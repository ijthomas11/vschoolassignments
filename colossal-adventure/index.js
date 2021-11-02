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


Array.prototype.sample = function() {
    return attackers[Math.floor(Math.random() * attackers.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * 10);
}

while (player.HP > 0) {
    const walk = readlineSync.question("Hello " + name + " please enter the character w to start walking or p to print: ")
    if (walk === 'w') {
        let attackerCounter = getRandomInt();
        if (attackerCounter <= 3) {
            const enemy = attackers.sample()
            console.log("An enemy is near. You are about to be attacked by..." + enemy)
            fight(enemy)

        } else {
            console.log("Keep walking...");
        }
    }
    if (walk === 'p') {
        console.log(player)
    }
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(50)
    max = Math.ceil(100)
    return Math.floor(Math.random() * (100 - 50 + 1) + 50)
}

function getRandomInt1(min, max) {
    min = Math.ceil(50)
    max = Math.ceil(100)
    return Math.floor(Math.random() * (50 - 30 + 1) + 30)
}



function fight(enemy) {
    const attackOrRun = readlineSync.keyIn("You have three options...[a]Attack, [r]Run, or [p]Info", {
        limit: "a,r,p"
    });
    let attackerHP = 100
    while (attackOrRun === "a" && player.HP > 0 && attackerHP > 0) {
        let attackerDamage = getRandomIntInclusive()
        attackerHP = getAttackerHP()
        console.log(attackerHP)

        function getAttackerHP() {
            console.log(attackerHP)
            console.log(attackerDamage)
            return (+attackerHP) - (+attackerDamage)
        }
        let playerDamage = getRandomInt1()
        player.HP = playerHP()
        console.log(playerDamage)
        console.log(player.HP)


        function playerHP() {
            return (+player.HP) - (+playerDamage)
        }
        if (attackerDamage < 100) {
            console.log("You have damaged the enemy by " + attackerDamage + "." + " His health is " + attackerHP + ".")

        }
        if (attackerHP < 0 && player.HP > 0) {
            console.log("You have killed the enemy. ");
            var playerItems = player.Items
            playerItems.push("rocket-launcher")
            var extraHp = 25
        }
    }

    let escapeChances = Math.random()
    while (attackOrRun === "r") {
        console.log(escapeChances)
        if (escapeChances <= 0.5) {
            console.log("You have failed the escape and died. GAME OVER!")
            process.exit()
        } else {
            console.log("You have escaped.Keep walking..")
            break;
        }
    }
    while (attackOrRun === "p") {
        console.log(player)
        break;
    }

}


//** still could tweak game further...i.e add in extra HP