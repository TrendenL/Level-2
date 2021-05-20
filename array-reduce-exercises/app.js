// 1) Turn an array of numbers into a total of all the numbers
// const nums = [2, 4, 6, 8, 10, 12, 14]

// const result = nums.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result)

// 2) Turn an array of numbers into a long string of all those numbers.
// const result = nums.reduce(function(final, num){
//     let numStr = num.toString()
//     final += numStr
//     return final
// })

// console.log(result)

// 3) Turn an array of voter objects into a count of how many people voted
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const userVoted = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(userVoted)

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalCost = wishlist.reduce(function(final, price){
//     final += price.price
//     return final
// }, 0)

// console.log(totalCost)

// 5) Given an array of arrays, flatten them into a single array
// let arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// const toArr = arrays.reduce(function(final, arr){
//     let newArr = final.concat(arr)
//     return newArr
// }, [])

// console.log(toArr)

// 6) Given an array of potential voters, return an object representing the results of the vote
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = voters.reduce(function(final, voter){
    if (voter.age < 25) {
        final.numYoungPeople++
        if (voter.voted) {
            final.numYoungVotes++
        }
    } else if (voter.age <= 35) {
        final.numMidPeople++
        if (voter.voted) {
            final.numMidVotes++
        }
    } else if (voter.age <= 55) {
        final.numOldPeople++
        if (voter.voted) {
            final.numOldVotes++
        }
    }
    return final
}, { numYoungPeople: 0, numYoungVotes: 0, numMidPeople: 0, numMidVotes: 0, numOldPeople: 0, numOldVotes: 0})

console.log(voterResults)




