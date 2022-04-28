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
    const playerSelection = playerSelection.toLowerCase();
    let result = "";

    if (playerSelection === computerSelection) {
        result = `Tie. Both players selected ${playerSelection}`;
    } 
    
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result = "You win. Rock beats scissors.";
        } else {
            result = "You lose. Paper beats rock.";
        }
    }
    
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win. Paper beats rock.";
        } else {
            result = "You lose. Scissors beats paper.";
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result = "You win. Scissors beats paper.";
        } else {
            result = "You lose. Rock beats scissors.";
        }
    }

    return result;
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper, or scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();