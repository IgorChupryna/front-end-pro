const actManyOperand = {
    '+': add,
    '-': sub,
    '/': div,
    '*': mul
};

const action = getAction();
const countOperands = getCountOperands();
const valuesOperands = getValuesOperands(countOperands);
const result = calculate(valuesOperands, action);

showResult(valuesOperands, action, result);


function showResult(arr, oper, res) {
    let stringResult = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            stringResult += arr[i];
            continue;
        }
        stringResult += `${arr[i]}${oper}`;
    }
    alert(`${stringResult}=${res}`);
}

function calculate(arr, act) {
    return actManyOperand[act](arr);
}

function getValuesOperands(count) {
    let arr = [];
    arr.length = count;
    for (let i = 0; i < arr.length; i++) {
        let el;
        do {
            el = Number(prompt(`Enter ${i + 1} operand`));

        } while (!isNumber(el) || (action === '/' && i > 0 && el === 0))
        arr[i] = el;
    }
    return arr;
}

function getCountOperands() {
    let count = '';
    do {
        count = Number(prompt('Enter count operands (1,5)'));
    } while (!isNumber(count) || !isTrueCount(count, 1, 5))
    return count;
}

function getAction() {
    let operators = Object.keys(actManyOperand);
    let act = '';
    do {
        act = prompt(`Enter operator: ${operators}`);
    } while (!operators.includes(act));
    return act;
}

function div(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res /= arr[i];
    }
    return res;
}

function mul(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

function sub(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res -= arr[i];
    }
    return res;
}

function add(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

function isNumber(num) {
    return !Number.isNaN(num);
}

function isTrueCount(val, minNotEqual, maxNotEqual) {
    return val > minNotEqual && val < maxNotEqual;
}