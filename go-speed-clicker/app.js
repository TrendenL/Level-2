let count = 0
let num = document.getElementById("num")
const btn = document.getElementById("btn")

btn.addEventListener('click', function(){
    if(num === num ){
        count++
    }
    num.textContent = count
    localStorage.setItem("total count", count)
})

let savedCount = localStorage.getItem("total count", count)










