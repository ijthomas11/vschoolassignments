let baddies = document.baddies
let goombas = document.baddies.goombas.value
let bombOmbs = document.baddies.bombOmbs.value
let cheepCheep = document.baddies.cheepCheep.value
let submit = document.getElementById("submit")


submit.addEventListener("click", function() {
    let count1 = document.baddies.goombas.value * 5
    console.log(count1)
    let count2 = document.baddies.bombOmbs.value * 7
    let count3 = document.baddies.cheepCheep.value * 11
    let totalCount = count1 + count2 + count3
    console.log(totalCount)
    document.baddies.total.value = totalCount
})