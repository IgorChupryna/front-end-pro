/*
1) С помощью prompt спрашиваем у пользователя что он хочет сделать (+ - / *).
2) С помощью prompt спрашиваем у пользователя первое число.
3) С помощью prompt спрашиваем у пользователя второе число.
4) С помощью alert выводим результат действия со всеми операндами (Например "2 + 3 = 5" )
 */

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

    let firstOperand = prompt('Enter first operand');
console.log(Number.isNaN(firstOperand))
console.log(isNaN(firstOperand))

    if (Number.isNaN(firstOperand)) {
        alert('Type error! Must be number');
        return;
    }
    firstOperand = Number(firstOperand);
    let secondOperand = prompt('Enter second operand');
    if (Number.isNaN(secondOperand)) {
        alert('Type error or ! Must be number');
        return;
    }
    if (userOperator === "/" && secondOperand === "0") {
        alert('Divine on "0"!');
        return;
    }
    secondOperand = Number(secondOperand);
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