const colors = ["red", "blue", "green"]
document.getElementById("add").addEventListener("click", function(e) {
    let subItem = createSubItem(e)


    document.getElementById("list").append(subItem)
})


function createDropDown() {
    let dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++) {
        const colors = ["red", "blue", "green"]
        const option = document.createElement("option")
        option.textContent = colors[i]
        option.value = colors[i]
        dropDown.append(option)

    }
    return dropDown

}

function createSubItem(e) {
    let subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    let dropDown = createDropDown()
    subItem.append(dropDown)
    subItem.setAttribute("class", "subitem")


    dropDown.addEventListener("change", function(e) {
        function changeColor() {
            subItem.style.backgroundColor = dropDown.value
        }
        changeColor()
    })
    return subItem
}