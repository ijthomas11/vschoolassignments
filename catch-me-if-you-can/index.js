function sum(x, y) {
    return x + y
}
var result = sum("1", "2")
try {
    if (result == 3) {
        console.log("Code is ok")
    } else { throw "Data type must be number" }
} catch (err) {
    console.log(err)
}


var user = { username: "sam", password: "123abc" }
    // var user = {
    //     username: "jerry",
    //     password: "456def"
    // }

function login(username, password) {
    if (user.username === "sam" && user.password === "123abc") {
        user === true
    }
}
try {
    login()
    if (user.username === "sam" && user.password === "123abc") {
        console.log("login successful")
    } else { throw "Incorrect username/password" }
} catch (err) {
    console.log(err)
}