const choices = ["rock", "paper", "scissors"];
const computerChoiceElement = document.getElementById("computerImage");
const resultTextElement = document.getElementById("resultText");
const restartButton = document.querySelector(".restart");

let playerScore = 0;
let computerScore = 0;

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  computerChoiceElement.src = "placeholder.png";
  resultTextElement.textContent = "";
});

// function computerTurn() {
//   const randNum = Math.floor(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       computer = "Rock";
//       return computer;
//       break;
//     case 2:
//       computer = "Paper";
//       return computer;
//     case 3:
//       computer = "Scissors";
//       return computer;
//       break;
//   }
// }


// function playerOption(playerChoice) {
//   //check if round <=10 then the remaining procedure should continue: or else alert "Game Over"
//   console.log("playerChoice:" + playerChoice);
//   computer = computerTurn();

//   comparechoiceGame (playerChoice.id, computer)
//   document.querySelector("#playerPointDisplay").textContent = playerPoints
//   document.querySelector("#computerPointDisplay").textContent = computerPoints
// }


// function comparechoiceGame (playerChoice, computer){

// if (playerChoice === "Rock") {
//   if (computer === "Rock") alert("Its a Tie");
//   else if (computer === "Paper") {
//     alert("Computer wins");
//     computerPoints ++;
//   } else if (computer === "Scissors") {
//     alert("Player1 wins");
//     playerPoints++;
//   }
// }
// if (playerChoice === "Paper") {
//   if (computer === "Paper") alert("Its a Tie");
//   else if (computer === "Rock") {
//     alert("Player1 wins");
//     playerPoints++;
//   } else if (computer === "Scissors") {
//     alert("Computer wins")
//     computerPoints ++;
//   }
// }
// if (playerChoice === "Scissors") {
//   if (computer === "Scissors") alert("Its a Tie");
//   else if (computer === "Rock") {
//     alert("Computer wins");
//     computerPoints ++;
//   } else if (computer === "Paper") {
//     alert("Player1 wins");
//     playerPoints++;
//   }
// }
// }


