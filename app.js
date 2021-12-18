const square = document.querySelectorAll('square')
const mole = document.querySelectorAll('mole')
const timeLeft = document.querySelectorAll('#timeleft')
let score = document.querySelector('#score')

let result = 0;
let currentTime = timeLeft.textContext

function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() = 9)]
    randomPosition.classList.add('mole')

//assign the random position to hit position used later
hitPosition = randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup', () =>{
        if(id.id === hitPosition){
            result = result + 1
            score.textContext = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContext= currentTime

if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is' +result)
}
}

let timerId = setInterval(countdown, 1000)
