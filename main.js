window.addEventListener('DOMContentLoaded', () =>{

    const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restart = document.querySelector('#restart')
    scoreBoard = {
        player: 0,
        computer: 0
    };

    //  Play game
    function play() {
        restart.style.display = 'inline-block'
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice , computerChoice)
        showWinner(winner, computerChoice)
    }  

    // getComputerChoice
    function getComputerChoice(){
        const rand = Math.random()
        if(rand < 0.34){
            return 'rock'
        }else if(rand <= 0.67){
            return 'paper'
        }else{
            return 'scissors'
        }
    }

    // GetWinner
    function getWinner(p, c){
        if(p === c){
            return 'draw'
        }else if (p === 'rock'){
            if(c === 'paper'){
                return 'computer'
            }else{
                return 'player'
            }
        }else if (p === 'rock'){
            if(c === 'scissors'){
                return 'computer'
            }else{
                return 'player'
            }
        }else if (p === 'scissors'){
            if(c === 'rock'){
                return 'computer'
            }else{
                return 'player'
            }
        }
    }

    //ShowWinner
    function showWinner(winner, computerChoice){
        if (winner === 'player'){
            scoreBoard.player++
            result.innerHTML = `
                <h1 class="text-win">Siz yutiz</h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>komputer anladi <strong>${computerChoice.charAt(0).toUpperCase() +  + computerChoice.slice(1)}</strong></p>
            `
        }else if (winner === 'computer'){
            scoreBoard.computer++
            result.innerHTML = `
                <h1 class="text-lose">Yutqazdingz</h1>
                <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                <p>kompyuter tanladi<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }else{
            result.innerHTML = `
            <h1>Bu durang</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>kompyuter tanladi<strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }
        score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Computer: ${scoreBoard.computer} </p>
        `
        modal.style.display = 'block'
    }

    // RestartGame
    function restartGame(){
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Computer: ${scoreBoard.computer} </p>
        `
    }

    // ClearModal
    function clearModal(event){
        if (event.target == modal){
            modal.style.display = 'none'
        }
    }

    // Event listenears
    choices.forEach(choice => choice.addEventListener('click',play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

})














// window.addEventListener('DOMContentLoaded', () => {
//     const choiceElement = document.querySelector('.choice');
//     const score = document.querySelector('#score');
//     const modalElement = document.querySelector('.modal');
//     const resultElement = document.querySelector('#result');
//     const restartElement = document.querySelector('#restart');
//     const scoreBoard = {
//         player: 0,
//         computer: 0,
//     }

//     function play() {
//         restartElement.style.display = 'inline-block';
//         const playerchoice = event.target.id
//         const computerChoice = getComputerChoice();
//         const winner = getWinner(playerchoice ,computerChoice);
//         showWinner(winner, computerChoice)
//     }

//     function getComputerChoice() {
//         const rand = Math.random();
//         if (rand < 0.34){
//             return 'rock'
//         }else if(rand <= 0.67){
//             return 'paper'
//         }else{
//             return 'scissors'
//         }
//     }

//     function getWinner(p, c) {
//         if (p === c){
//             return 'draw'
//         }else if (p === 'rock'){
//             if (c === 'paper'){
//                 return 'computer'
//             }else{
//                 return 'player'
//             }


//         }else if(p === 'paper'){
//             if (c === 'scissors'){
//                 return 'computer'
//             }else{
//                 return 'player'
//             }


//         }else if(p === 'scissors'){
//             if (c === 'rock'){
//                 return 'computer'
//             }else{
//                 return 'player'
//             }
//         }
//     }

//     function showWinner(winner, computerChoice) {
//         if(winner === 'player'){
//             scoreBoard.player++
//             restartElement.textContent = `
//                 <h1 class="text-win">You win</h1>
//                 <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//                 <p>computer chose <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>

//             `
//         }else if (winner === 'computer'){
//             scoreBoard.computer++
//             result.textContent = `
//                 <h1 class="text-lose">You lose</h1>
//                 <i class="fas fa-hand-${computerChoice}fa-10x"</i>
//                 <p> computer chose  <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>
//             `
//         }else{
//             result.textContent = `
//                 <h1 class="text-lose">It's A Draw</h1>
//                 <i class="fas fa-hand-${computerChoice} fa-10x"></i>
//                 <p> computer chose  <strong>${computerChoice.charAt(0).tuUpperCase() + computerChoice.slice(1)}</strong> </p>
//             `
//         }
//         score.textContent`
//                 <p> player: ${scoreBoard.player} </p>
//                 <p> player: ${scoreBoard.computer} </p>
//         `

//         modalElement.steyl.display = 'block'
//     }

//     function restartGame () {
//         scoreBoard.player = 0
//         scoreBoard.computer = 0
//         score.textContent`
//             <p> player: ${scoreBoard.player} </p>
//             <p> player: ${scoreBoard.computer} </p>
//         `
//     }  

//     function clearModal(event) {
//         if (event.target == modalElement){
//             modalElement.style.display = 'none'
//         }
//     }


//     choiceElement.forEach(choiceElement => choiceElement.addEventListener('click', play))
//     window.addEventListener('click', clearModal)
//     resultElement.addEventListener('click', restartGame)   
// })

