// This class will store all the values, store what operation will be used  
class Calculator {
    constructor(prevValue, currentValue) {
        this.prevValueText = prevValue;
        this.currentValueText = currentValue;
        // As soon as we create a new instance of calculator, we want to clear all values
        this.clear();
    }

    clear() {
        this.currentValue = '';
        this.prevValue = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        // If a decimal is included in the current value, then return. Return simply stops the function from running again
        if (number === '.' && this.currentValue.includes('.')) {
            return;
        }
        // We want the values to be strings, so that they are appended and not added
        this.currentValue = this.currentValue.toString() + number.toString();
    }

    chooseOperation(operation) {
        // Checks to see if there is a current value otherwise function will not run
        if (this.currentValue === '') {
            return; 
        }
        // Sets the operator to whatever button was clicked
        this.operation = operation;
        // Sets the prevValue variable as the currentValue
        this.prevValue = this.currentValue;
        // Clears the current value
        this.currentValue = '';
    }

    compute() {

    }

    updateDisplay() {
        this.currentValueText.innerText = this.currentValue;
        this.prevValueText.innerText = this.prevValue;
    }
}

const numberBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.op-btn');
const equalBtn = document.querySelector('.equal-btn');
const clearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const currentValueText = document.querySelector('.value');
const prevValueText = document.querySelector('.typed-value');

// Defining the class created above
const calculator = new Calculator(prevValueText, currentValueText);


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    });
});

opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    });
});














// numberBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => { 
//         result = parseInt(value.textContent += e.target.outerText);
//     });
// });

// equalBtn.addEventListener('click', () => {
//     operate(opClicked, resultA);
// });

// const add = (a, b) => {
//     return a + b;
// };

// const subtract = (a, b) => {
//     return a - b;
// };

// const multiply = (a, b) => {
//     return a * b;
// };

// const divide = (a ,b) => {
//     return a / b;
// };

// const operate = (operator, a, b) => {
//     let result = 0;
//     switch (operator) {
//         case '+':
//             result = add(a,b);
//             break;
//         case '-':
//             result = subtract(a,b);
//             break;
//         case 'x':
//             result = multiply(a,b);
//             break;
//         case '/':
//             result = divide(a,b);
//             break;
//     }
    
//     return result;
// };
