const dragonBody = ["Wyrm", "Drake", "Wyvern", "Two Headed", "Pygmy", "Leviathan"];

const dragonElement = ["No power", "Light", "Darkness", "Fire", "Water", "Earth", "Wind", "Electricity", "Time", "Death", "Life"];

//utils

function generateBody() {
    statBody.value = dragonBody[getRandomNumber(5)];
}

function generateElement() {
    statElem.value = dragonElement[getRandomNumber(10)];
}

function generate(button) {
    switch (button) {
        case "butType":
            statBody.value = dragonBody[getRandomNumber(5)];
            break;
        case "butElem":
            statElem.value = dragonElement[getRandomNumber(10)];
            break;
        case "butWing":
            statWing.value = getRandomNumber(2) == 1 ? "Has wings" : "Doesn't have wings";
            break;
        case "butPrim":
            let myPrimColor = "#" + generateColor();
            statCol1.style.backgroundColor = myPrimColor;
            statCol1.value = myPrimColor;

            break;
        case "butSec":
            let mySecColor = "#" + generateColor();
            statCol2.style.backgroundColor = mySecColor;
            statCol2.value = mySecColor;
            break;
        case "butTert":
            let myTertColor = "#" + generateColor();
            statCol3.style.backgroundColor = myTertColor;
            statCol3.value = myTertColor;
            break;
        default:
            break;
    }
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function generateColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}