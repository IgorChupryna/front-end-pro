//Task 1
const operators = {
    '+': function (a, b) {
        return a + b
    },
    '-': function (a, b) {
        return a - b
    },
    '/': function (a, b) {
        return a / b
    },
    '*': function (a, b) {
        return a * b
    }
};

main();

function main() {
    let userOperator = prompt('Enter operator: + - / *');
    if (!isTrueOperator(userOperator)) {
        alert('Wrong operator!');
        return;
    }

    let firstOperand = Number(prompt('Enter first operand'));
    if (!isNumber(firstOperand)) {
        alert('Type error! Must be number');
        return;
    }
    let secondOperand = Number(prompt('Enter second operand'));
    if (!isNumber(secondOperand)) {
        alert('Type error! Must be number');
        return;
    }

    if (isDivideOnZero(userOperator, secondOperand)) {
        alert('Divide on "0"!');
        return;
    }

    calculateTwoOperands(userOperator, firstOperand, secondOperand);
}

function isDivideOnZero(operatop, operand) {
    return operatop === "/" && operand === 0;
}

function isNumber(num) {
    return !Number.isNaN(num);
}

function isTrueOperator(o) {
    return o === '+' || o === '-' || o === '/' || o === '*';
}

function calculateTwoOperands(operand, numA, numB) {
    let result = operators[operand](numA, numB);
    alert(`${numA} ${operand} ${numB} = ${result}`);
}




//Task 2
const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
        beautifulPropertyName: 88,
        'property with spaces': {
            a: {
                b: '',
                c: {
                    someProperty: [{
                        'prop name': 'I am a smart programmer',
                    }],
                },
            },
        },
    }],
    prop3: function() {
        return {
            baz: 'Hello',
            bar: {
                anotherBeautifulProp: [8, {
                    target: 'It was simple!',
                    qwe: [8, 17, 37],
                }],
            },
        };
    },
};

console.log(obj.prop2[3]["property with spaces"].a.c.someProperty[0]["prop name"]); // I am a smart programmer
console.log(obj.prop3().bar.anotherBeautifulProp[1].target); // It was simple!