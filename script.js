"use strict";

game();

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  let resultsMessage;
  const winMessage = "You have beaten the computer";
  const lossMessage = "You lost against the computer";
  const tieMessage = "Game results in a tie";
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors? ");
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    roundResult = roundResult.toLowerCase();
    if (roundResult.includes("you win")) {
      playerWins++;
    } else if (roundResult.includes("you lose")) {
      computerWins++;
    } else if (roundResult.includes("it's a tie")) {
      ties++;
    } else {
      console.log("Error: something went wrong...");
    }
  }
  if (playerWins > computerWins) {
    resultsMessage = winMessage;
  } else if (computerWins > playerWins) {
    resultsMessage = lossMessage;
  } else {
    resultsMessage = tieMessage;
  }
  console.log("\nYour results:");
  console.log(`Wins: ${playerWins}`);
  console.log(`Losses: ${computerWins}`);
  console.log(`Ties: ${ties}`);
  console.log(`\n${resultsMessage}`);
}

function computerPlay() {
  const selectedItem = getRandomInt(1, 4);
  switch (selectedItem) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const wins = winnerSelection(playerSelection, computerSelection);
  if (wins === "Tie") {
    return "It's a Tie! both played " + capitalizeFirst(playerSelection);
  } else if (playerSelection === wins.toLowerCase()) {
    return `You Win! ${capitalizeFirst(
      playerSelection
    )} beats ${capitalizeFirst(computerSelection)}`;
  } else {
    return `You Lose! ${capitalizeFirst(
      computerSelection
    )} beats ${capitalizeFirst(playerSelection)}`;
  }
}

function winnerSelection(selection1, selection2) {
  selection1 = selection1.toLowerCase();
  selection2 = selection2.toLowerCase();
  if (selection1 === selection2) {
    return "Tie";
  } else if (
    (selection1 === "rock" || selection1 === "scissors") &&
    (selection2 === "rock" || selection2 === "scissors")
  ) {
    return "Rock";
  } else if (
    (selection1 === "paper" || selection1 === "rock") &&
    (selection2 === "paper" || selection2 === "rock")
  ) {
    return "Paper";
  } else if (
    (selection1 === "scissors" || selection1 === "paper") &&
    (selection2 === "scissors" || selection2 === "paper")
  ) {
    return "Scissors";
  } else {
    return "Error: wrong input";
  }
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
