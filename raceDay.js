const readline = require('readline-sync');

let raceNumber = Math.floor(Math.random()* 1000);
const runnerName = readline.question("What's your name? ");
const runnerAge = readline.questionInt("Enter your age: ");
const registeredEarly = readline.keyInYN("Did you register early? ");

/*let registeredEarly = true;
let runnerAge = 17;*/

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}
let startTime;
if (runnerAge > 18 && registeredEarly) {
    startTime = '9:30 am';
    console.log(`Runner ${raceNumber} will race at ${startTime}.`);
} else if (runnerAge > 18 && !registeredEarly) {
    startTime = '11:00 am';
    console.log(`Runner ${raceNumber} will race at ${startTime}.`);
} else if (runnerAge > 18) {
    startTime = '12:30 pm';
    console.log(`Runner ${raceNumber} will race at ${startTime}.`);
} else {
    console.log("Please see the registration desk");
}




