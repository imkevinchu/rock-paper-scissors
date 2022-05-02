const computerPlay = () => {
  const moves = ["rock", "paper", "scissors"];

  const randomMove = moves[Math.floor(Math.random() * moves.length)];
  return randomMove;
};

const calculateRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `Tie. Both players selected ${playerSelection}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "You win. Rock beats scissors.";
      playerScore++;
    } else {
      result = "You lose. Paper beats rock.";
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win. Paper beats rock.";
      playerScore++;
    } else {
      result = "You lose. Scissors beats paper.";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      result = "You win. Scissors beats paper.";
      playerScore++;
    } else {
      result = "You lose. Rock beats scissors.";
      computerScore++;
    }
  }
  return result;
};

const playRound = (playerSelection, computerSelection) => {
  let result = "";

  if (computerScore == 5 || playerScore == 5) {
    result = calculateWinner();
  } else {
    result = calculateRound(playerSelection, computerSelection);
    result =
      result +
      ` The score is Player: ${playerScore} to Computer: ${computerScore}.`;
  }
  return result;
};

const calculateWinner = () => {
  let result = "";

  if (computerScore > playerScore) {
    result = `Computer won ${computerScore} to ${playerScore}`;
  } else {
    result = `You won ${playerScore} to ${computerScore}`;
  }

  computerScore = 0;
  playerScore = 0;

  return result;
};

var computerScore = 0;
var playerScore = 0;

const play = (e) => {
  const playerSelection = e.target.textContent;
  const computerSelection = computerPlay();
  result = playRound(playerSelection, computerSelection);
  document.getElementById("results").textContent = result;
};

const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", play));
