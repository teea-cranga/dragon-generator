const dragonBody = ["Wyrm", "Drake", "Wyvern", "Two Headed", "Pygmy"];

const dragonElement = ["No power", "Light", "Darkness", "Fire", "Water", "Earth", "Wind", "Electricity", "Time", "Death", "Life"];

//utils

function generateBody() {
    statBody.value = dragonBody[getRandomNumber(4)];
}

function generateElement() {
    statElem.value = dragonElement[getRandomNumber(10)];
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}