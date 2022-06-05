`use strict`;

function play() {
  const gameElements = [`rock`, `paper`, `scissors`];
  let humansMessage = document.getElementById(`humansMessage`);
  let computersMessage = document.getElementById(`computersMessage`);
  let displayResult = document.getElementById(`displayResult`);
  let humansChoice = Math.trunc(Math.random() * 3);
  let computersChoice = Math.trunc(Math.random() * 3);
  //BOTH GOT ROCK
  if (humansChoice === 0 && computersChoice === 0) {
    humansMessage.innerHTML = `You got rock!`;
    computersMessage.innerHTML = `Computer got rock!`;
    displayResult.innerHTML = `There is a tie!`;
  }
  //BOTH GOT PAPER
  else if (humansChoice === 1 && computersChoice === 1) {
    humansMessage.innerHTML = `You got paper!`;
    computersMessage.innerHTML = `Computer got paper`;
    displayResult.innerHTML = `There is a tie!`;
  }
  //BOTH GOT SCISSORS
  else if (humansChoice === 2 && computersChoice === 2) {
    humansMessage.innerHTML = `You got scissors!`;
    computersMessage.innerHTML = `Computer got scissors`;
    displayResult.innerHTML = `There is a tie!`;
  }
  //YOU GOT ROCK AND COMPUTER GOT PAPER
  else if (humansChoice === 0 && computersChoice === 1) {
    humansMessage.innerHTML = `You got rock!`;
    computersMessage.innerHTML = `Computer got paper`;
    displayResult.innerHTML = `The computer won!`;
  }
  //YOU GOT ROCK AND COMPUTER GOT SCISSORS
  else if (humansChoice === 0 && computersChoice === 2) {
    humansMessage.innerHTML = `You got rock!`;
    computersMessage.innerHTML = `Computer got scissors!`;
    displayResult.innerHTML = `You won!`;
  }
  //YOU GOT PAPER AND COMPUTER GOT ROCK
  else if (humansChoice === 1 && computersChoice === 0) {
    humansMessage.innerHTML = `You got paper!`;
    computersMessage.innerHTML = `Computer got rock`;
    displayResult.innerHTML = `You won!`;
  }
  //YOU GOT PAPER AND COMPUTER GOT SCISSORS
  else if (humansChoice === 1 && computersChoice === 2) {
    humansMessage.innerHTML = `You got paper!`;
    computersMessage.innerHTML = `Computer got scissors!`;
    displayResult.innerHTML = `The computer won!`;
  }
  //YOU GOT SCISSORS AND COMPUTER GOT ROCK
  if (humansChoice === 2 && computersChoice === 0) {
    humansMessage.innerHTML = `You got scissors!`;
    computersMessage.innerHTML = `Computer got rock!`;
    displayResult.innerHTML = `The computer won!`;
  }
  //YOU GOT SCISSORS AND COMPUTER GOT PAPER
  if (humansChoice === 2 && computersChoice === 1) {
    humansMessage.innerHTML = `You got scissors!`;
    computersMessage.innerHTML = `Computer got paper!`;
    displayResult.innerHTML = `You won!`;
  }
}

document.querySelector(`#startGame`).addEventListener(`click`, play);
