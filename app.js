// This class will store all the values and store what operations will be used  
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
        this.currentValue = this.currentValue.toString().slice(0, -1);
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
        // Checks to see if the previous value does contain a number, which if it does, run compute
        // This allows us to continually chain numbers and operators together 
        if (this.prevValue !== '') {
            this.compute();
        }

        // Sets the operator to whatever button was clicked
        this.operation = operation;
        // Sets the prevValue variable as the currentValue
        this.prevValue = this.currentValue;
        // Clears the current value
        this.currentValue = '';
    }

    compute() {
        let result;
        const prev = parseFloat(this.prevValue);
        const current = parseFloat(this.currentValue);
        
        // Checks to see if the previous and current value contain data
        if(isNaN(prev) || isNaN(current)) {
            return;
        }

        switch(this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        // Makes sure that user cannot divide by 0, and displays error message
        if(this.operation = '/' && this.currentValue == 0) {
            result = 'Cannot divide by 0';
        }

        // This shows the result of the computation 
        this.currentValue = result;

        // Resetting the operation and previous value but not current value as it can be used for the next operation
        this.operation = undefined;
        this.prevValue = '';
    }

    updateDisplay() {
        this.currentValueText.innerText = this.currentValue;
        // If the user has clicked a operation button, then it will show on the display
        if(this.operation != null) {
            this.prevValueText.innerText = `${this.prevValue} ${this.operation}`;
        } else {
            this.prevValueText.innerText = '';
        }
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
// Now, when using calculator object, we can use dot notation, to access any function
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

equalBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
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
