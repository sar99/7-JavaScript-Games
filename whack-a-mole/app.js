const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
var hitPosition;

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 18)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id == hitPosition) {
            result = result + 1;
            score.textContent = result;
            hitPosition = 15;
        }
    })
})



// function moveMole() {
//     var timeID = null;
//     timeID = setInterval(randomSquare, 600);
// }
// moveMole();



function countDown() {
    randomSquare();
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(time);
        clearInterval(timeID);
        window.alert("Game Over");
    }
}

let time = setInterval(countDown, 1000);