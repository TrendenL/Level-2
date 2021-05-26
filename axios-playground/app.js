//GET request
// axios.get("https://api.vschool.io/trenden/todo")
//     .then(response => {
//         for (let i = 0; i < response.data; i++) {
//             const h1 = document.createElement("h1")
//             h1.textContent = response.data[i].title
//             document.body.appendChild(h1)
//         }
//     })
//     .catch(err => console.log(err))

// POST request
// const newTodo = {
//     title: "My 1st Todo",
//     description: "This is my 1st entry",
//     imgUrl: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMHJzN3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
// }

// axios.post("https://api.vschool.io/trenden/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err))

// const todoForm = document.todoForm

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value,
//     }

//     axios.post("https://api.vschool.io/trenden/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(err => console.log(err))
// })


// axios.get("https://api.vschool.io/trenden/todo")
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err))

// DELETE request
// axios.delete("https://api.vschool.io/trenden/todo/60ad65a1ee6f8d3fc3fedae1")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// PUT request
// const updates = {
//     title: "I CHANGED THE TITLE!!!"
// }

// axios.put("https://api.vschool.io/trenden/todo/60ad614eee6f8d3fc3fedadf", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))





// GET one
// axios.get("https://api.vschool.io/trenden/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))




axios.get("https://swapi.dev/api/people/1")
    .then(response => {console.log(response.data)})
    .catch(error => console.log(error))