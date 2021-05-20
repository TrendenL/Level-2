const peopleArraary = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortedArr = peopleArraary.filter(function(oldEnough){
    if(oldEnough.age > 18){
        return oldEnough
    }
}).sort(function(a, b){
    if(a.lastName < b.lastName) { 
        return -1;
    }
    if(a.lastName > b.lastName) {      
        return 1; 
    }
}).map(function(tag){ 
    return `<li> ${tag.firstName} ${tag.lastName} is ${tag.age} </li>`
})

console.log(sortedArr)