/*
Написать функцию калькулятор которая умеет
прибавлять, вычитать, устанавливать новое
базовое значение и возвращать значение.
- Если вместо числа передается что-то другое то игнорируем
его и текущее значение калькулятора не меняем.
- Функции add, sub, set ничего возвращать или выводить в консоль не должны.
* Дополнительно (по желанию) реализовать метод .reset() который устанавливает базовое значение в то которое было задано при вызове Ф createCalculator(100).
 */

const WRONG_OPERAND = 0;
const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);

calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять
calculator.sub('qwe'); // NaN и значение 40 не менять
calculator.set('qwe'); // NaN и значение 40 не менять

console.log(calculator.get()) // 40

calculator.reset();
console.log(calculator.get()) // 100

function createCalculator(base) {
    let currBase = base;
    return {
        add: (num) => {
            currBase += isArgNan(num) ? WRONG_OPERAND : num;
        },
        sub: (num) => {
            currBase -= isArgNan(num) ? WRONG_OPERAND : num;
        },
        set: (num) => {
            currBase = isArgNan(num) ? currBase : num;
        },
        get: () => currBase,
        reset: () => {
            currBase = base;
        }
    }
}

function isArgNan(num) {
    return Number.isNaN(Number(num));
}