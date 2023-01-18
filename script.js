// Get random computer choice
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice  = options[ Math.floor(Math.random() * options.length) ];

  return choice
}

function getPlayerChoice() {
  // prompt input, default random
  let input = prompt("Rock / Paper / Scissors?");
  // case insensitive
  input = input.toLowerCase();
  
  return input;
}

// Compare player and computer choice
function playRound(playerChoice, computerChoice) {
  /**
   * 0 = draw
   * 1 = player
   * 2 = computer
   * 3 = invalid
   */
  let result = 3;
  if      (playerChoice == computerChoice)                             result = 0
  else if (playerChoice == "rock"     && computerChoice == "paper")    result = 2
  else if (playerChoice == "rock"     && computerChoice == "scissors") result = 1
  else if (playerChoice == "paper"    && computerChoice == "rock")     result = 1
  else if (playerChoice == "paper"    && computerChoice == "scissors") result = 2
  else if (playerChoice == "scissors" && computerChoice == "rock")     result = 2
  else if (playerChoice == "scissors" && computerChoice == "paper")    result = 1
  return result;
}

function game(rounds) {
  // track scores
  let playerScore   = 0;
  let computerScore = 0;

  // play rounds
  for (let i = 0; i < rounds; i++) {
    // take user and computer input
    let playerInput   = getPlayerChoice();
    let computerInput = getComputerChoice();

    // compare user and computer input
    let result = playRound(playerInput, computerInput);

    // store winner score
    if      (result == 1) playerScore++;
    else if (result == 2) computerScore++;

    // capitalize first letters
    function capitalize(str) {
      return str.slice(0, 1).toUpperCase().concat(str.slice(1));
    }
    playerInput   = capitalize(playerInput);
    computerInput = capitalize(computerInput);
    
    // print round winner
    let message;
    if      (result == 0) message = `[${playerScore} - ${computerScore}] Draw!`;
    else if (result == 1) message = `[${playerScore} - ${computerScore}] You Win! ${playerInput} beats ${computerInput}`;
    else if (result == 2) message = `[${playerScore} - ${computerScore}] You Lose! ${computerInput} beats ${playerInput}`;
    else if (result == 3) message = "Invalid Input!";
    console.log(message);

    // replay round if invalid
    if (result == 3) i--;
  }

  // announce winner
  if      (playerScore > computerScore)  console.log("YOU WIN!");
  else if (playerScore < computerScore)  console.log("YOU LOSE!");
  else if (playerScore == computerScore) console.log("DRAW!");
}

game(3);