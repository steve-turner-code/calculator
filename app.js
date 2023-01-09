const NUMBER_BUTTONS = document.querySelectorAll('.number');
const OPERATOR_BUTTONS = document.querySelectorAll('.operator');
const EQUALS = document.querySelectorAll('.equals');

let historicalValue = document.querySelector('.history');
let value = document.querySelector('#value');

let firstNumber = '';
let secondNunber = '';
let currentOperator = '';
let lastInput = '';


function inputHandler (e) {
    if (value.textContent == '0') value.textContent = ''
    if (lastInput == 'result') value.textContent = ''
    value.textContent += e.target.value;
    lastInput = 'number';
}



function operate (a, b, operator) {
    console.log(operator)

    switch (operator) {
        case 'plus':
          value.textContent = add(a, b);
          lastInput = 'result'
          firstNumber = secondNunber;
          secondNunber = ''
            
        break;
        
        
    
    }
}




function equalsHandler (e) {
    lastInput = 'equals'
}

function operatorHandler (e) {
    console.log('operator handler')
    console.log(lastInput);

    if (lastInput == 'result') {
        currentOperator = e.target.value;
        firstNumber = value.textContent;
        return;
    }; 

    lastInput = 'operator';
    currentOperator = e.target.value;

    if (!firstNumber) {
        firstNumber = value.textContent;
        historicalValue.textContent = `${firstNumber} ${e.target.textContent}`
        value.textContent = '0'
    }

    else {
        secondNunber = value.textContent;
        historicalValue.textContent += ` ${secondNunber}`
        operate (firstNumber, secondNunber, currentOperator);
    }
}

//Maths operations
function add (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return a-b;
    }

function divide (a, b) {
    return a/b;
}

function multiply (a, b) {
    return a*b;
}


//Event Handlers
NUMBER_BUTTONS.forEach(item => item.addEventListener('click', inputHandler));
OPERATOR_BUTTONS.forEach(item => item.addEventListener('click', operatorHandler));