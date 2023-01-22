// Get random computer choice
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice  = options[ Math.floor(Math.random() * options.length) ];

  return choice
}

// Get player input choice
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

// Play game in rounds
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
  if      (playerScore > computerScore)  alert("YOU WIN!");
  else if (playerScore < computerScore)  alert("YOU LOSE!");
  else if (playerScore == computerScore) alert("DRAW!");
}

// game(3);

/******************************************************************/

// track scores
let playerScore   = 0;
let computerScore = 0;

// get elements
let elementScorePlayer   = document.getElementById('scorePlayer');
let elementScoreComputer = document.getElementById('scoreComputer');
let elementStatus        = document.getElementById('roundStatus');
let buttons              = document.querySelectorAll('button');

function disableButtons(elements) {
  for (let btn of elements) btn.disabled = true;
}

// player button input event
for (let btn of buttons) {
  btn.onclick = (e) => {
    // get inputs
    let playerInput   = e.target.dataset.choice;
    let computerInput = getComputerChoice()

    // compare user and computer input
    let result = playRound(playerInput, computerInput);

    // store and display winner score
    if (result == 1) {
      elementScorePlayer.textContent = ++playerScore;
    } 
    else if (result == 2) {
      elementScoreComputer.textContent = ++computerScore;
    }
    
    // capitalize first letters
    function capitalize(str) {
      return str.slice(0, 1).toUpperCase().concat(str.slice(1));
    }

    // print round winner
    let message;
    if      (result == 0) message = `Draw!`;
    else if (result == 1) message = `You Win! ${capitalize(playerInput)} beats ${capitalize(computerInput)}`;
    else if (result == 2) message = `You Lose! ${capitalize(computerInput)} beats ${capitalize(playerInput)}`;
    else if (result == 3) message = "Invalid Input!";
    elementStatus.textContent = message;

    // end game
    if (playerScore == 5 || computerScore == 5) {
      disableButtons(buttons);

      if (playerScore > computerScore)  elementStatus.textContent = 'YOU WIN THE GAME!';
      if (playerScore < computerScore)  elementStatus.textContent = 'YOU LOSE THE GAME!';
    }
  }
}