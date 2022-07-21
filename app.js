// Buttons
const numBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.op-btns');

let value = document.querySelector('.value');
let arr = [];

numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = '';
        result += e.target.innerText;
        value.textContent += result;
    });
});

console.log(arr);

const displayValue = () => {

};

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a ,b) => {
    return a / b;
};

const operate = (operator, a, b) => {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
    }
    
    return result;
};

console.log(operate('*', 2, 5));