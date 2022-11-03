/*
Наибольшее число в массиве

Функция принимает массив чисел и должна найти и вернуть максимальный элемент в массиве.
    Реализовать функцию двумя способами: через циклы и через рекурсию.

    Что можно использовать: классический цикл for, метод .slice() или .pop()
Что нельзя использовать: Math.max()

Если не знаете как решить, пишите мне я буду скидывать псевдокод.
*/

console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');
console.log(max2([8]), 'one element test, must return 8');
console.log(max2([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max2([8, 17]), '2 elements test, must return 17');


function max(numbers) {
    // cycle implementation
    let maxVal = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            maxVal = numbers[i];
        }
    }
    return maxVal;
}

function max2(numbers) {
    // recursion implementation
}