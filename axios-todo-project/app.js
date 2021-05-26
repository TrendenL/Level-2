// PART 1 GET
function getData(){
    axios.get("https://api.vschool.io/trenden/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

function listData(data){
    clearList()
    for(let i=0; i<data.length; i++){
        // CREATE
        const h2 = document.createElement("h2")
        const p =document.createElement("p")
        const img = document.createElement("img")
        const checkbox = document.createElement("input")
        const deleteBtn = document.createElement("button")

        // CONTENT
        h2.textContent = data[i].title
        p.textContent = data[i].description
        img.src = data[i].imgUrl
        img.setAttribute("width", "300px")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = data[i].completed
        deleteBtn.textContent = "delete"

        // APPEND
        document.getElementById("todo-list").append(h2, p, img, checkbox, deleteBtn)

        // PART 3 PUT
        checkbox.addEventListener("click", function(e){
            if (checkbox.checked === false){
                // COMPLETED: FALSE
            axios.put("https://api.vschool.io/trenden/todo/" + data[i]._id, {completed: false})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            } else {
                // COMPLETED: TRUE
            axios.put("https://api.vschool.io/trenden/todo/" + data[i]._id, {completed: true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            }
        })

        // PART 4 DELETE
        deleteBtn.addEventListener("click", function(e){
            axios.delete("https://api.vschool.io/trenden/todo/" + data[i]._id)

                .then(res => alert("Todo was successfully deleted!"))
                .catch(err => console.log(err))
        })
    }
}
getData()

function clearList() {
    const element = document.getElementById("todo-list")
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

// PART 2 POST
const todoForm = document.todoForm

todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""

    axios.post("https://api.vschool.io/trenden/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})