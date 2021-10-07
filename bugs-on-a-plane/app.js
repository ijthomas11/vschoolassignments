var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector
submit.style.backgroundColor = "cornflowerblue"


function formAlert() {
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked === true) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident.." +
        "                  Prevent this page from creating addtional dialogs.");

}


submit.addEventListener("click", function() {
        formAlert()
    })
    //figure out how to change color of radio/checkbox...also put checkbox in alert//