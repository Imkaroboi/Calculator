let firstNum;
let secondNum;
let operator;
let display = document.querySelector(".screen").value;
function addition(firstNum, secondNum) {
    document.querySelector(".screen").innerHTML = firstNum + secondNum
}
function subtraction(firstNum, secondNum) {
    document.querySelector(".screen").innerHTML = firstNum - secondNum
}
function multiplication(firstNum, secondNum) {
    document.querySelector(".screen").innerHTML = firstNum * secondNum
}
function division(firstNum, secondNum) {
    document.querySelector(".screen").innerHTML = firstNum / secondNum
}