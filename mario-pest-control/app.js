const baddieCost1 = 5
const baddieCost2 = 7
const baddieCost3 = 11

const form = document.form

form.addEventListener('submit', function(e){
    e.preventDefault()

    let numberOfBaddies1 = document.form.baddie1.value
    let numberOfBaddies2 = document.form.baddie2.value
    let numberOfBaddies3 = document.form.baddie3.value

    // console.log(numberOfBaddies1)
    // console.log(numberOfBaddies2)
    // console.log(numberOfBaddies3)

    let totalBaddieCost1 = baddieCost1 * numberOfBaddies1
    let totalBaddieCost2 = baddieCost2 * numberOfBaddies2
    let totalBaddieCost3 = baddieCost3 * numberOfBaddies3

    // console.log(totalBaddieCost1)
    // console.log(totalBaddieCost2)
    // console.log(totalBaddieCost3)

    let finalCost = totalBaddieCost1 + totalBaddieCost2 + totalBaddieCost3

    // console.log(finalCost)

    const totalOfBaddies = document.createElement("h3")
    totalOfBaddies.textContent = "The total cost is: $" + finalCost
    totalOfBaddies.style.textAlign = "center"
    totalOfBaddies.style.fontSize = "40px"
    totalOfBaddies.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    totalOfBaddies.style.color = "#fff"
    totalOfBaddies.style.marginBottom = "20px"
    form.append(totalOfBaddies)

    // console.log(totalOfBaddies)

})




