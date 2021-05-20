const form = document.getElementById("travelForm")

form.addEventListener("submit", (event) => {
    event.preventDefault()
//     const firstName = form.firstName.value
//     const lastName = form.lastName.value
    alert(`    first name: ${form.firstName.value} 
    last name: ${form.lastName.value}
    age: ${form.age.value}`)
})