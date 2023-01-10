const NUMBER_BUTTONS = document.querySelectorAll('.number');
const OPERATOR_BUTTONS = document.querySelectorAll('.operator');
const EQUALS = document.querySelector('.equals');



let historicalValue = document.querySelector('.history');
let value = document.querySelector('#value');

let firstNumber = '';
let secondNunber = '';
let lastInput = '';
let result = '';
let currentOperator = null;
let resetScreen = true;


function inputHandler (e) {
    if (resetScreen) {
        value.textContent = ''
        resetScreen = false;
    
    }

    value.textContent += e.target.value;
}



function operate (a, b, operator) {
    console.log(operator);

    switch (operator) {
        case 'plus':
          return add(a, b);
        break;  

        case 'subtract':
            return subtract(a, b);
          break; 

        case 'multiply':
            return multiply(a, b);
         break; 

        case 'divide':
            return divide(a, b);
        break; 
    }
lastInput = 'result';    

}

function setOperator (e) {
//if current operator is empty, save the value as current operator
if (!currentOperator) {
    currentOperator = e.target.value;
    firstNumber = value.textContent;
    historicalValue.textContent = `${value.textContent} ${e.target.textContent}`
    resetScreen = true;
}

else {
    secondNunber = value.textContent;
    console.log(firstNumber, secondNunber, currentOperator);
    value.textContent = operate(firstNumber, secondNunber, currentOperator);
    historicalValue.textContent = `${value.textContent} ${e.target.textContent}`;
    firstNumber = value.textContent;
    currentOperator = e.target.value;
    resetScreen = true;
}
}

function equalsHandler () {
    if (!firstNumber) return;
    secondNunber = value.textContent;
    console.log(firstNumber, secondNunber, currentOperator);
    value.textContent = operate(firstNumber, secondNunber, currentOperator);
    historicalValue.textContent = value.textContent;
    currentOperator = null;
}


//Maths operations
function add (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
    }

function divide (a, b) {
    return Number(a) / Number(b);
}

function multiply (a, b) {
    return Number(a) * Number(b);
}


//Event Handlers
NUMBER_BUTTONS.forEach(item => item.addEventListener('click', inputHandler));
OPERATOR_BUTTONS.forEach(item => item.addEventListener('click', setOperator));
EQUALS.addEventListener('click', equalsHandler);








    