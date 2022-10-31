const container = document.getElementById('root')
const falseBtn = document.getElementById('false')
const trueBtn = document.getElementById('true')

fetch("http://localhost:3000/all")
    .then(response => response.json())
    .then(data => showData(data))

function showData(data) {
    const arr = Object.keys(data)
    const arr2 = Object.values(data)
    var str = ""

    for(var i = 0; i < arr.length; i++) {
        str += `<p>${arr[i]}: ${arr2[i]}</p>`
    }
    container.innerHTML = str
}

falseBtn.addEventListener('click', () => {
    fetch("http://localhost:3000/all")
        .then(turnFalseState())
})

function turnFalseState() {
    fetch(`http://localhost:3000/add/entrada/0`)
    fetch("http://localhost:3000/all")
        .then(response => response.json())
        .then(data => showData(data))
}

trueBtn.addEventListener('click', () => {
    fetch("http://localhost:3000/all")
        .then(turnTrueState())
})

function turnTrueState() {
    fetch(`http://localhost:3000/add/entrada/1`)
    fetch("http://localhost:3000/all")
        .then(response => response.json())
        .then(data => showData(data))
}