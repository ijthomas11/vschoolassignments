var eventsAtWork = ["work", "pretend to work", "party", "work",
    "party", "work", "meeting", "party", "daily grind", "work", "party"
]
for (var i = 0; i < eventsAtWork.length; i++) {
    if ((eventsAtWork[i]) === "party") {
        console.log("hooray!")
    }
}
var booleans = ["true", "true", "false", "true", "false", "false",
    "false", "true"
]
for (var i = 0; i < booleans.length; i++) {
    if ((booleans[i]) === "true") {
        console.log(booleans[i])
    }
}
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
for (var i = 0; i < officeItems.length; i++) {
    if ((officeItems[i]) === "computer") {
        console.log(officeItems[i])
    }
}
var peopleWhoWantTooSeeMadMaxFury = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

for (var i = 0; i < peopleWhoWantTooSeeMadMaxFury.length; i++) {
    if (peopleWhoWantTooSeeMadMaxFury[i]["gender"] === "male") {
        (peopleWhoWantTooSeeMadMaxFury[i]["gender"] = "him")
    }
    if (peopleWhoWantTooSeeMadMaxFury[i]["gender"] === "female") {
        (peopleWhoWantTooSeeMadMaxFury)[i]["gender"] = "her"
    }
    if (peopleWhoWantTooSeeMadMaxFury[i]["age"] < 18) {
        console.log("not old enough")
        console.log(peopleWhoWantTooSeeMadMaxFury[i]["name"] + " is not old enough to see Madmax," + " don't let " + peopleWhoWantTooSeeMadMaxFury[i]["gender"] + " in.")
    } else if (peopleWhoWantTooSeeMadMaxFury[i]["age"] >= 18) {
        console.log("old enough")
        console.log(peopleWhoWantTooSeeMadMaxFury[i]["name"] + " is old enough to see MadMax," + " let " + peopleWhoWantTooSeeMadMaxFury[i]["gender"] + " in.")
    }
} * //finish optional bonus challenge//*