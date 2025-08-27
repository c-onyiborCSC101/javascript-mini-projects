const readline = require('readline-sync');
const userName = readline.question("What's your name?");
let randomGreeting = Math.floor(Math.random() * 5);

let greeting = ""
switch (randomGreeting) {
    case 0:
        greeting = `Yo, ${userName}!`;
        break;
    case 1:
        greeting = "What's up! " + userName;
        break;
    case 2:
        greeting = "My man " + userName + "," + " what's good!";
        break;
    case 3:
        greeting = `${userName} my G!`;
        break;
    default:
        greeting = "Wagwan man!";
        break;
}
console.log(greeting);


function askEightBall() {
    const userQuestion = readline.question("Ask the Magic Eight Ball a question: ");
console.log(`You asked: ${userQuestion}.`);

let randomNumber = Math.floor(Math.random() * 13);
//console.log(randomNumber);

let eightBall = "";
switch (randomNumber) {
    case 0:
        eightBall = "You aren't up to a year old.";
        break;
    case 1:
        eightBall = "You are less than ten.";
        break;
    case 2:
        eightBall = "You are five years old.";
        break;
    case 3:
        eightBall = "You are nineteen.";
        break;
    case 4:
        eightBall = "You look too young to be any older than twenty.";
        break;
    case 5:
        eightBall = "Why'd you ask?";
        break;
    case 6:
        eightBall = "I don't wanna know.";
        break;
    case 7:
        eightBall = "I'll give you twenty five tops.";
        break;
    case 8:
        eightBall = "Hmmmm, maybe twenty two?";
        break;
    case 9:
        eightBall = "You're probably younger than me.";
        break;
    case 10:
        eightBall = "Don't think you're up to twenty.";
        break;
    case 11:
        eightBall = "You're twenty.";
        break;
    default :
        eightBall = "You're too old!";
    break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);


}

while (true) {
    askEightBall();
    const playAgain = readline.question("Ask again? Type 'exit' to quit, or press Enter to continue: ");
    if (playAgain.toLowerCase() === "exit") {
        break;
    }
}
console.log("Goodbye!");
