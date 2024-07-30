
function cpuChoice(x) {
  return 1 + Math.floor(Math.random() * x);
}

var userChoice;
var playerScore = 0;
var cpuScore = 0;

console.log("Lets play Rock, Paper, Scissors.\nSelect an option.\n");

while (true){
  console.log("1. Rock\n2. Paper\n3. Scissors");

  while (true) {
    userChoice = parseInt(prompt());
    if (userChoice == 1) {
      break;
    } else if (userChoice == 2) {
      break;
    } else if (userChoice == 3) {
      break;
    } else {
      console.log("Invalid input. Please try again.");
    }
  }

  if (userChoice == 1) {
    console.log("You picked rock!");
  } else if (userChoice == 2) {
    console.log("You picked paper!");
  } else {
    console.log("You picked scissors!");
  }

  let cpu = cpuChoice(3);

  if (cpu == 1) {
    console.log("The computer picked rock!");
  } else if (cpu == 2) {
    console.log("The computer picked paper!");
  } else {
    console.log("The computer picked scissors!");
  }

  if (userChoice == 1 && cpu == 1) {
    console.log("It's a draw!");
  } else if (userChoice == 1 && cpu == 2) {
    cpuScore++;
    console.log("You lost!");
  } else if (userChoice == 1 && cpu == 3) {
    playerScore++;
    console.log("You win!");
  }

  if (userChoice == 2 && cpu == 1) {
    playerScore++;
    console.log("You win!");
  } else if (userChoice == 2 && cpu == 2) {
    console.log("It's a draw!");
  } else if (userChoice == 2 && cpu == 3) {
    cpuScore++;
    console.log("You lost!");
  }

  if (userChoice == 3 && cpu == 1) {
    cpuScore++;
    console.log("You lost!");
  } else if (userChoice == 3 && cpu == 2) {
    playerScore++;
    console.log("You win!");
  } else if (userChoice == 3 && cpu == 3) {
    console.log("It's a draw!");
  }

  console.log("Player Score: ", playerScore);
  console.log("Computer Score: ", cpuScore);

  if (playerScore == 5){
    console.log("Game over you win the game.")
    break;
  }
  else if (cpuScore == 5){
    console.log("Game over you lose the game.")
    break;
  }
}
