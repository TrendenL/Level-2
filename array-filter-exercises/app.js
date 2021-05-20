const arr = [3, 6, 8, 2]

// const numArr = arr.filter(function(greaterArr){
//     if(greaterArr >= 5){
//         return true
//     }
// })
const numArr = arr.filter(greaterArr => greaterArr >= 5)

console.log(numArr)

// EVENS ONLY
const evensArr = arr.filter(function(even){
    if(even % 2 === 0){
        return even
    }
})

console.log(evensArr)

// 5 CHARACTERS OR FEWER
const random = ["dog", "wolf", "by", "family", "eaten", "camping", "whatever", "hi"]

const fiveFewArr = random.filter(function(fewArr){
    if(fewArr.length <= 5){
        return fewArr
    }
})

console.log(fiveFewArr)

// ILLUMINATI CLUB
const illuminatiArr = [
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kanye West", member: false},
    {name: "Bob Ziroll", member: true}
]

// const belongArr = illuminatiArr.filter(function(gangArr){
//     if(gangArr.member === true){
//         return true
//     }
// })

const belongArr = illuminatiArr.filter(gangArr => gangArr.member === true)

console.log(belongArr)

// MATRIX
const movieArr = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const canGoArr = movieArr.filter(seeMovieArr => seeMovieArr.age > 18)

console.log(canGoArr)