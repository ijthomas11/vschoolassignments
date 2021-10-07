const readlineSync = require("readline-sync")
const name = readlineSync.question("What is your name?");
const options = readlineSync.question("Hello " + name + "...welcome to the Escape Room! You are stuck in a room and have three options: find the key, open the door, or put your hand in the hidden hole. In order to open the door you must find the key first.If you put your hand in hole..YOU DIE!If you find key and open the door..YOU WIN!Good luck.");

var findKey = readlineSync.question("Did you find key? Yes or No?");
while (findKey == "yes" || findKey == "no") {
    if (findKey === "yes") {
        readlineSync.question("You said " + findKey + "... Great!!");
        console.log("Now that you've found key ...");
        break;
    } else if (findKey === "no") {
        readlineSync.question(" You said " + findKey + "...You need to find the key first!!");
        var findKey = readlineSync.question("Did you find key? Yes or No?");
    }

}

var openDoor = readlineSync.question("Did you open the door? Yes or No?");
while (openDoor == "yes" || openDoor == "no") {
    if (openDoor === "yes") {
        console.log("You said " + openDoor + "!" + "You WIN!!!");
        process.exit()
        break;
    } else if (openDoor === "no") {
        console.log("You said " + openDoor + " ...you need to open the door!!");
        break;
    }
}



var putHandInHole = readlineSync.question("Did you put hand in hole? Yes or No?")
while (putHandInHole == "yes" || putHandInHole == "no") {
    if (putHandInHole === "yes") {
        readlineSync.question("You said " + putHandInHole +
            " ...you're dead... GAME OVER!");
        process.exit()
        break;
    } else if (putHandInHole === "no") {
        readlineSync.question("You said " + putHandInHole +
            " ...Continue looking for key!!! ");
        break;

    }
}