'use strict'

function Calculator(base) {
    const initialBase = base;

    this.base = base;

    if (!isNumber(base)) {
        throw new Error('base must be a number');
    }

    this.add = function (num) {
        if (isNumber(num)) {
            this.base += num;
        }
    }
    this.sub = function (num) {
        if (isNumber(num)) {
            this.base -= num;
        }
    }
    this.set = function (num) {
        if (isNumber(num)) {
            this.base = num;
        }
    };
    this.get = function () {
        return this.base;
    };
    this.reset = function () {
        this.base = initialBase;
    }
}

const calc = new Calculator(100);

const cal2c = new Calculator('e00');
console.log(cal2c)

calc.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)
calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется
calc.get(); // 30 возвращаем значение

console.log(calc.get()) // 40
calc.reset();
console.log(calc.get())

function isNumber(num) {
    return !isNaN(num) && num !== '' && num !== null;
}