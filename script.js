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
    const playerMove = playerSelection.toLowerCase();
    let result = "";

    if (playerMove === computerSelection) {
        result = `Tie. Both players selected ${playerMove}`;
    } 
    
    else if (playerMove === "rock") {
        if (computerSelection === "scissors") {
            result = "You win. Rock beats scissors.";
        } else {
            result = "You lose. Paper beats rock.";
        }
    }
    
    else if (playerMove === "paper") {
        if (computerSelection === "rock") {
            result = "You win. Paper beats rock.";
        } else {
            result = "You lose. Scissors beats paper.";
        }
    }

    else if (playerMove === "scissors") {
        if (computerSelection === "paper") {
            result = "You win. Scissors beats paper.";
        } else {
            result = "You lose. Rock beats scissors.";
        }
    }

    return result;
}

const game = () => {

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));