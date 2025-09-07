const readline = require('readline-sync');
const getSleepHours = (day) => {
    return readline.questionInt(`How many hours did you sleep on ${day}?`);
}

const getActualSleepHours = () => {
    return getSleepHours('Sunday') +
            getSleepHours('Monday') +
            getSleepHours('Tuesday') +
            getSleepHours('Wednesday') +
            getSleepHours('Thursday') +
            getSleepHours('Friday') +
            getSleepHours('Saturday');
}

const getIdealSleepHours = () => {
    const idealSleepHours = readline.questionInt('What are your ideal hours of sleep per night?');
    return idealSleepHours * 7;
}

const calculateSleepDebt = (actualSleepHours, idealSleepHours) => {
    if (actualSleepHours === idealSleepHours) {
        return "You're getting enough sleep."
    } else if (actualSleepHours < idealSleepHours) {
        return "You need more sleep."
    } else if (actualSleepHours > idealSleepHours) {
        return "You're getting too much sleep."
    }
}

const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
console.log(`Actual sleep hours this week: ${actualSleepHours}`);
console.log(`Ideal sleep hours this week: ${idealSleepHours}`);
console.log(calculateSleepDebt(actualSleepHours, idealSleepHours));








