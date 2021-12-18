window.addEventListener('DOMContentLoaded', () => {

})

const choiceElement = document.querySelector('.choice');
const scoreElement = document.querySelector('#score');
const modalElement = document.querySelector('.modal');
const resultElement = document.querySelector('#result');
const restartElement = document.querySelector('#restart');
const scoreBoard = {
    player: 0,
    computer: 0,
}

function play() {
    restartElement.style.display = 'inline-block';
    const playerchoice = event.target.id
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerchoice ,computerChoice);
    showWinner(winner, computerChoice)
}

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34){
        return 'rock'
    }else if(rand <= 0.67){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function getWinner(p, c) {
    if (p === c){
        return 'draw'
    }else if (p === 'rock'){
        if (c === 'paper'){
            return 'computer'
        }else{
            return 'player'
        }


    }else if(p === 'paper'){
        if (c === 'scissors'){
            return 'computer'
        }else{
            return 'player'
        }


    }else if(p === 'scissors'){
        if (c === 'rock'){
            return 'computer'
        }else{
            return 'player'
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player'){
        scoreBoard.player++
        restartElement.textContent = `
            <h1 class="text-win">You win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>computer chose <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>

        `
    }else if (winner === 'computer'){
        scoreBoard.computer++
        result.textContent = `
            <h1 class="text-lose">You lose</h1>
            <i class="fas fa-hand-${computerChoice}fa-10x"</i>
            <p> computer chose  <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>
        `
    }else{
        result.textContent = `
            <h1 class="text-lose">It's A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p> computer chose  <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>
        `
    }
    score.textContent`
            <p> player: ${scoreBoard.player} </p>
            <p> player: ${scoreBoard.computer} </p>
    `

    modalElement.steyl.display = 'block'
}

function restartGame () {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.textContent`
        <p> player: ${scoreBoard.player} </p>
        <p> player: ${scoreBoard.computer} </p>
    `
}  

function clearModal(event) {
    if (event.target == modalElement){
        modalElement.style.display = 'none'
    }
}


choiceElement.forEach(callback, choice => {
    return choice.addEventListener('click', play)
})

window.addEventListener('click', clearModal)

restartElement.addEventListener('click', restartGame)