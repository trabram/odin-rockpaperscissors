function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice  = options[ Math.floor(Math.random() * options.length) ];

  return choice
}

console.log(getComputerChoice());

// function myLoop() {
//   setTimeout(function() {

//     console.log(getComputerChoice());

//     myLoop();
//   }, 300)
// }
// myLoop();