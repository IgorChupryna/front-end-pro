calculateTwoOperands();

function isTrueOperator(o) {
    return o === '+' || o === '-' || o === '/' || o === '*';
}

function calculateTwoOperands() {
    let userOperator = prompt('Enter operator: + - / *');
    if (!isTrueOperator(userOperator)) {
        alert('Wrong operator!');
        return;
    }

    let firstOperand = Number(prompt('Enter first operand'));

    if (Number.isNaN(firstOperand)) {
        alert('Type error! Must be number');
        return;
    }

    let secondOperand = Number(prompt('Enter second operand'));
    if (Number.isNaN(secondOperand)) {
        alert('Type error! Must be number');
        return;
    }

    if (userOperator === "/" && secondOperand === 0) {
        alert('Divine on "0"!');
        return;
    }

    let result;

    switch (userOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
    }
    alert(`${firstOperand} ${userOperator} ${secondOperand} = ${result}`);
}