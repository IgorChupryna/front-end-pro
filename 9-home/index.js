const btn = document.querySelector('#btn');
const listInput = document.querySelector('#input_list');
const mainInput = document.querySelector('#main_input');
let numTodo = 1;

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    if (mainInput.value === '') return;

    const div = document.createElement('div');
    div.textContent = `${numTodo}. ${mainInput.value}`;
    div.className = numTodo % 2 === 0 ? 'blue' : 'green';

    mainInput.value = '';
    listInput.append(div);
    numTodo++;
}