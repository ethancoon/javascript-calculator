const buttons = document.querySelectorAll('.symbol')
const output = document.querySelector('.calc-calculation');
const decimal = document.querySelector('#decimal');
const history = document.querySelector('.calc-history')
let operator = '';
let num1 = '';
let num2 = '';
let answer = '';

// Calculations
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if (b === 0) {
        return 'Error';
    }
    return num1 / num2;
};

function power(num1, num2) {
    return num1 ** num2;
};

function calculate(num1, operator, num2) {
    if (operator === 'add') {
        answer = add(+num1, +num2);
    } else if(operator === 'subtract') {
        answer = subtract(+num1, +num2);
    } else if(operator === 'multiply') {
        answer = multiply(+num1, +num2);
    } else if(operator === 'divide') {
        answer = divide(+num1, +num2);
    }
    operator = ''
    num1 = ''
    num2 = ''
    return answer;
};

function operate(button) {
    if (num1 === '') {
        num1 = output.textContent;
        operator = button.id;
    } else if (num1 !== '' && operator !== '') {
        num2 = output.textContent;
        history.textContent = displayCalculation(operator)
        num1 = calculate(num1, operator, num2);
        operator = button.id;
    }
    output.textContent = '';
};

function displayNumber(button) {
    if(output.textContent === '0') {
        output.textContent = button.textContent;
    } else {
        output.textContent += button.textContent;
    }
};

function displayDecimal(button) {

};

function displayCalculation(operator) {
    if(operator === 'add') {
        return `${num1} + ${num2} = ${calculate(num1, operator, num2)}`;
    } else if(operator === 'subtract') {
        return `${num1} - ${num2} = ${calculate(num1, operator, num2)}`;
    } else if(operator === 'multiply') {
        return `${num1} × ${num2} = ${calculate(num1, operator, num2)}`;
    } else if(operator === 'divide') {
        return `${num1} ÷ ${num2} = ${calculate(num1, operator, num2)}`;
    }
}

function changeSign(button) {
    
};

function clearOutput(button) {
    if(button.id === 'clear') {
        output.textContent = '';
        num1 = '';
        num2 = '';
        history.textContent = '';
    }
};

function listenButtons() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                displayNumber(button);
            } else if (button.classList.contains('operator')) {
                operate(button);
            } else if (button.id === 'decimal') {
                displayDecimal(button);
            } else if (button.id === 'equal') {
                operate(button);
            } else if (button.id === 'clear') {
                clearOutput(button);
            } else if (button.id === 'sign') {
                changeSign(button);
            }
        });
    });
};

listenButtons();