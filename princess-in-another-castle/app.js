let names = ["Mario", "Luigi"]
let totalCoins = 0
let status = ["Powered Up", "Big", "Small", "Dead"]
let hasStar = false
let gameActive = true

function randomName() {
    let sum = math.floor(Math.random() * 2)
    let name = names[sum]
    return name
}

function randomStatus() {
    let sum = math.floor(Math.random() * 3)
    let selectStatus = status[sum]
    return selectStatus
}