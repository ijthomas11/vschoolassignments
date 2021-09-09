const readlineSync = require("readline-sync")
const name = readlineSync.question("What is your name?");

var findKey = readlineSync.question("Did you find key? Yes or No?");
while (findKey == "yes" || findKey == "no") {
    if (findKey === "yes") {
        readlineSync.question("You said " + findKey + "... YOU WIN!");
        console.log("You opened the door! ... YOU WIN!!");
        break;
    } else if (findKey === "no")
        readlineSync.question(" You said " +
            findKey + "...You need to find the key first!!");
    break;
}



var putHandInHole = readlineSync.question("Did you put hand in hole? Yes or No?")
while (putHandInHole == "yes" || putHandInHole == "no") {
    if (putHandInHole === "yes") {
        readlineSync.question("You said " + putHandInHole +
            " ...you're dead... GAME OVER!");
        break;
    } else if (putHandInHole === "no")
        readlineSync.question("You said " + putHandInHole +
            " ...Continue looking for key!!! ");
    break;
}
while (true) {
    var findKey = readlineSync.question("Did you find key? Yes or No?");
    switch (findKey) {

        case "no":
            readlineSync.question(" You said " +
                findKey + "...You need to find the key first!!");
            break;
        case "yes":
            readlineSync.question("You said " + findKey + "... YOU WIN!");
            console.log("You opened the door! ... YOU WIN!!");
            break;


    }


    var putHandInHole = readlineSync.question("Did you put hand in hole? Yes or No?");
    switch (putHandInHole) {

        case "no":
            readlineSync.question("You said " + putHandInHole +
                " ...Continue looking for key!!! ");
            break;
        case "yes":
            readlineSync.question("You said " + putHandInHole +
                " ...you're dead... GAME OVER!");
            break;

    }
}