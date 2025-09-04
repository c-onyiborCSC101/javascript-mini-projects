const readline = require('readline-sync');

const playGame = () => {
    const options = ['rock', 'paper', 'scissors'];
const computerChoice = options[Math.floor(Math.random() * 3)];
const userChoice = readline.question("Choose rock, paper, or scissors: ").toLowerCase();

let result;
if (computerChoice === userChoice) {
    result = "It's a tie!";
} else if (computerChoice === 'rock' && userChoice === 'paper') {
    console.log("You chose paper\nThe computer chose rock");
    result = "You win!";
} else if (computerChoice === 'rock' && userChoice === 'scissors') {
    console.log("You chose scissors\nThe computer chose rock");
    result = "You lose!";
} else if (computerChoice === 'paper' && userChoice === 'rock') {
    console.log("You chose rock\nThe computer chose paper");
    result = "You lose!";
} else if (computerChoice === 'paper' && userChoice === 'scissors') {
    console.log("You chose scissors\nThe computer chose paper");
    result = "You win!";
} else if (computerChoice === 'scissors' && userChoice === 'paper') {
    console.log("You chose paper\nThe computer chose scissors");
    result = "You lose!";
} else if (computerChoice === 'scissors' && userChoice === 'rock') {
    console.log("You chose rock\nThe computer chose scissors");
    result = "You win!";
} else {
    console.log('Wrong input!');
}
console.log(result);
}
playGame();
