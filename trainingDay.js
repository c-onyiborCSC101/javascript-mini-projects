const readline = require('readline-sync');

const events = ['Marathon', 'Triathlon', 'Decathlon'];
const getEvent = () => {
    const randomIndex = Math.floor(Math.random()*events.length);
    return events[randomIndex];
}

const getDaysToTrain = (randomEvent) => {
    if (randomEvent === 'Marathon') {
        return 50;
    } else if (randomEvent === 'Triathlon') {
        return 100;
    } else if (randomEvent === 'Decathlon') {
        return 200;
    } else {
        return 0;
    }
}

const logTrainingPlan = () => {
    const getUserName = readline.question("What is your name?: ");

    /* choose a random event
    const event = getEvent();*/

    // let user pick or cancel for random
    const idx = readline.keyInSelect(events, 'Pick an event (Cancel for a random pick):');
    let event;
    if (idx === -1) {
        event = getEvent(); // user cancelled -> pick random
    } else {
        event = events[idx]; // user chose -> use their choice
    }
    /*const event = idx === -1 ? getEvent() : events[idx];*/

    // get training days
    const days = getDaysToTrain(event);

    if (days === 0) {
        console.log(`${getUserName}, "${event}" is not a recognized event. Please choose Marathon, Triathlon, or Decathlon.`);
        return;
    }

    console.log(`${getUserName} will train for the ${event}. `)
    console.log(`You will need ${days} days to prepare.`);
    
}

logTrainingPlan();