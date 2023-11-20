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

const playerChoiceButtons = document.querySelectorAll(".choice");

playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeButtonborder ()

    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    computerChoiceElement.src = `images/${computerChoice}.jpg`;

    if (playerChoice === computerChoice) {
      resultTextElement.textContent = "It's a tie!";


