var form = document.getElementById("travelInfo")
var submit = document.getElementById("submit")
submit.style.backgroundColor = "red"
var header = document.getElementById("header")
header.style.fontSize = "50px"
header.style.textAlign = "center"

function formAlert() {
    var firstName = form["firstName"].value
    var lastName = form["lastName"].value
    var age = form["age"].value
    var gender = form["gender"].value
    var destination = form["travelDestination"].value
    var foodPreference = []
    if (form["Gluten Free"].checked) {
        foodPreference.push(document.getElementById("Gluten Free").value)
    }
    if (form["Vegan"].checked) {
        foodPreference.push(document.getElementById("Vegan").value)
    }
    if (form["Anything"].checked) {
        foodPreference.push(document.getElementById("Anything").value)
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + destination + "\nFood Preference: " + foodPreference)
}
submit.addEventListener("click", function() {
    formAlert()
})