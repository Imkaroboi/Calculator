let firstNum;
let secondNum;
let step = 0;
let operation;
let total;
let firstarr = []
let secondarr = []
const buttons = document.querySelectorAll(".btn")
const button = document.querySelector(".btn")
let display = document.querySelector('.screen');

function getNumber(num) {
    if(step === 0 || step === 1){
        firstarr.push(num)
        step = 1;
        firstNum = Number(firstarr.join(''));
        display.value = firstNum
    } else if (step === 2) {
        secondarr.push(num)
        secondNum = Number(secondarr.join(''));
        display.value = secondNum;
    }
};
function getOp(operator) {
    step = 2;
    operation = operator;
    display.value = operator;
}
function clearDisplay() {
    display.value = 0;
    firstNum = null;
    secondNum = null;
    step = 0;
    operation = null;
    result = 0;
    firstarr = []
    secondarr = []
}
const eval = () => {
    if (operation === '+') {
        display.value = firstNum + secondNum;
    } else if (operation === '-') {
        display.value = firstNum - secondNum;
    } else if (operation === '/') {
        display.value = firstNum / secondNum;
    } else if (operation === '*') {
        display.value = firstNum * secondNum;
    } else if (operation === '^') {
        display.value = firstNum ** secondNum;
    }
}