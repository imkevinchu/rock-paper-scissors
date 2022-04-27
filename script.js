const computerPlay = () => {

    const moves = [
    "rock", 
    "paper", 
    "scissors"
    ];

    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove
}

const playRound = (playerSelection, computerSelection) => {
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));