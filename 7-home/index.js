/*
Реализовать опросник для пользователя,
Задать ему, с помощью модальных окон, несколько вопросов и оценить его ответы.
За правильный ответ начисляется 10 очков, за неправильный или отказ от ответа - 0.
После прохода всех вопросов вывести, с помощью alert, результат.
Чтоб задать вопрос ииспользуем 2 функции: prompt() или confirm().

(!) Учитывая что prompt возвращает строку, преобразование типа в число делать не нужно, просто сравнивай ответ с правильным используя тройное равно.

Список вопросов:

Сколько хромосом у здорового человека? Ответ: '46'
Путин - хуйло? Ответ: true
Сколько хромосом у Путина? Ответ: '47'
Сколько тупых овец в московии (в млн)? Ответ: '144'
Снести ли памятник Екатерине-2 в Одессе? Ответ: true
Сколько черных пакетов выделяются на одного орка? Ответ: '1'
На сколько вы оцениваете работу ЗСУ от 1 до 10? Ответ: '10'
Со скольких позиций готовилось нападение на Беларусь? Ответ: '4'
Нужно ли сжигать сосийский флаг? Ответ: true
Поддерживаете ли вы уход иностранных компаний из московии? Ответ: true
Считаете ли вы сосию своим домом? Ответ: false
 */

let quiz = {
    1: ['Сколько хромосом у здорового человека?', '46', true],
    2: ['Путин - хуйло?', true, false],
    3: ['Сколько хромосом у Путина?', '47', true],
    4: ['Сколько тупых овец в московии (в млн)?', '144', true],
    5: ['Снести ли памятник Екатерине-2 в Одессе?', true, false],
    6: ['Сколько черных пакетов выделяются на одного орка?', '1', true],
    7: ['На сколько вы оцениваете работу ЗСУ от 1 до 10?', '10', true],
    8: ['Со скольких позиций готовилось нападение на Беларусь?', '4', true],
    9: ['Нужно ли сжигать сосийский флаг?', true, false],
    10: ['Поддерживаете ли вы уход иностранных компаний из московии?', true, false],
    11: ['Считаете ли вы сосию своим домом?', false, false],
}

runQuiz();

function runQuiz() {
    let currentPoints = 0;
    let userEnter;
    let currAnswer;
    for (const [key, value] of Object.entries(quiz)) {
        currAnswer = `${key}. ${value[0]}`;
        if (value[2] === true) {
            userEnter = prompt(currAnswer);
        } else {
            userEnter = confirm(currAnswer);
        }
        currentPoints += userEnter === value[1] ? 10 : 0;
    }
    alert(`Твой результат: ${currentPoints}/110`);
}