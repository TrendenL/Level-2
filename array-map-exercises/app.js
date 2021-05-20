// ARRAYS
const numArr = [2, 5, 100]
const nameArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// DOUBLE NUMBERS
// const dblNums = numArr.map(function(num){
//     return num * 2
// })

const dblNums = numArr.map(num => num * 2)

// console.log(dblNums)

// NUMS TO STRING
// const string = numArr.map(function(num){
//     return num.toString()
// })
const string = numArr.map(num => num.toString())

// console.log(string)

// const capArr = nameArr.map(function(nameCap){
//     return nameCap[0].toUpperCase() + nameCap.slice(1)
// })

const capArr = nameArr.map(nameCap => nameCap[0].toUpperCase() + nameCap.slice(1))

// console.log(capArr)

// NAMES ONLY

const usersArr = [
    {name: "Angelina Jolie",
    age: 80},

    {name: "Eric Jones",
    age: 2},

    {name: "Paris Hilton",
    age: 5},

    {name: "Kayne West",
    age: 16},

    {name: "Bob Ziroll",
    age: 100},
]

const strName = usersArr.map (userName => userName.name)

console.log(strName)

// THE MATRIX

const strMovieNames = usersArr.map(function(movieNames){
    if(movieNames.age > 18){
        console.log(movieNames.name + " can go to the Matrix")
    } else {
        console.log(movieNames.name + " is under age!!")
    }
})

const result = usersArr.map(function(person){
    return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>"
})

console.log(result)
