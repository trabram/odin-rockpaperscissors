// Get random computer choice
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice  = options[ Math.floor(Math.random() * options.length) ];

  return choice
}

// Compare player and computer choice
function playRound(playerChoice, computerChoice) {
  // Case insensitive
  playerChoice   = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  /**
   * Compare the choices
   * 0 = draw
   * 1 = player
   * 2 = computer
   */
  let result = 3;
  if      (playerChoice == computerChoice)                             result = 0
  else if (playerChoice == "rock"     && computerChoice == "paper")    result = 2
  else if (playerChoice == "rock"     && computerChoice == "scissors") result = 1
  else if (playerChoice == "paper"    && computerChoice == "rock")     result = 1
  else if (playerChoice == "paper"    && computerChoice == "scissors") result = 2
  else if (playerChoice == "scissors" && computerChoice == "rock")     result = 2
  else if (playerChoice == "scissors" && computerChoice == "paper")    result = 1
  
  // Capitalize first letters
  function capitalize(str) {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1));
  }
  playerChoice   = capitalize(playerChoice);
  computerChoice = capitalize(computerChoice);

  // Return message
  if      (result == 0) return "Draw!"
  else if (result == 1) return `You Win! ${playerChoice} beats ${computerChoice}`
  else if (result == 2) return `You Lose! ${computerChoice} beats ${playerChoice}`
  else if (result == 3) return `Invalid Input!`
}

// let playerChoice = "Rock";
// function myLoop() {
//   setTimeout(function() {
//     console.log( playRound(playerChoice, getComputerChoice()) );
//     myLoop();
//   }, 1000)
// }
// myLoop();