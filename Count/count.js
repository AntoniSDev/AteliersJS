// declarer variable let ou const

//let number = 8
let countElement = document.querySelector('#count')
//countElement.innerText = number

let number = 0

//button = document.querySelector('button')
//button.addEventListener('click', event => {
//    number ++
//    countElement.innerText = number
//  });

function increment() {
    number = number +1
    countElement.innerText = number
}

function decrement() {
    number = number -1
    countElement.innerText = number
}


function reset() {
    number = 0
    countElement.innerText = number
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('#reset').style.backgroundColor = "#" + randomColor;
}