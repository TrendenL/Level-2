const formAdd = document.addition

formAdd.addEventListener('submit', function(event){
    event.preventDefault()

    const firstAdd = formAdd.firstAdd.value
    const secondAdd = formAdd.secondAdd.value
    formAdd.firstAdd.value = ""
    formAdd.secondAdd.value = ""

    numAdd = +firstAdd + +secondAdd

    const h3 = document.createElement('h3')
    h3.textContent = numAdd
    h3.style.fontSize = "40px"

    formAdd.append(h3)
})

const formSub = document.subtraction

formSub.addEventListener('submit', function(event){
    event.preventDefault()

    const firstSub = formSub.firstSub.value
    const secondSub = formSub.secondSub.value
    formSub.firstSub.value = ""
    formSub.secondSub.value = ""

    numSub = +firstSub - +secondSub

    const h3 = document.createElement('h3')
    h3.textContent = numSub
    h3.style.fontSize = "40px"

    formSub.append(h3)
})

const formMultiply = document.multiply

formMultiply.addEventListener('submit', function(event){
    event.preventDefault()

    const firstMulti = formMultiply.firstMulti.value
    const secondMulti = formMultiply.secondMulti.value
    formMultiply.firstMulti.value = ""
    formMultiply.secondMulti.value = ""

    numMulti = +firstMulti * +secondMulti

    const h3 = document.createElement('h3')
    h3.textContent = numMulti
    h3.style.fontSize = "40px"

    formMultiply.append(h3)
})

