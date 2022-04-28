const computerPlay = () => {

    const moves = [
    "rock", 
    "paper", 
    "scissors"
    ];

    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    let result = "";

    if (playerSelection === computerSelection) {
        result = `Tie. Both players selected ${playerSelection}`;
    } 
    
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result = "You win. Rock beats scissors.";
            playerScore++;
        } else {
            result = "You lose. Paper beats rock.";
            computerScore++;
        }
    }
    
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win. Paper beats rock.";
            playerScore++;
        } else {
            result = "You lose. Scissors beats paper.";
            computerScore++;
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result = "You win. Scissors beats paper.";
            playerScore++;
        } else {
            result = "You lose. Rock beats scissors.";
            computerScore++;
        }
    }

    return result;
}

const calculateWinner = () => {
    let result = "";

    if (computerScore === playerScore) {
        result = `Tied ${computerScore} to ${playerScore}`;
    }

    else if (computerScore > playerScore) {
        result = `Computer won ${computerScore} to ${playerScore}`;
    }

    else {
        result = `You won ${playerScore} to ${computerScore}`;
    }

    return result;
}

const game = () => {
    computerScore = 0;
    playerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper, or scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(calculateWinner())
}

var computerScore;
var playerScore;
game();