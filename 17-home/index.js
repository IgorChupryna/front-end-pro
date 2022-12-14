'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const TODO_ITEM_SELECTOR = '.todoItem';

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const todoList = document.querySelector('#todo_list');

form.addEventListener('submit', onAddTodoBtnClick);
todoList.addEventListener('click', onTodoListClick);

addTodo("test1");
addTodo("test2");




function onAddTodoBtnClick(e) {
    e.preventDefault();

    const todo = getTodo();

    if (!isTodoValid(todo)) {
        showError();
        return;
    }

    addTodo(todo);
    clearForm();
}

function onTodoListClick(e) {
    const target = e.target;
    if (target.classList.contains(DELETE_BTN_CLASS)) {
        const todoEl = e.target.closest(TODO_ITEM_SELECTOR)
        todoEl.remove();
    } else if (target.classList.contains('textTodo')) {
        e.preventDefault();
        target.classList.contains('todoComplete') ? setTodoNew(target) : setTodoCompleted(target);
    }
}

function setTodoCompleted(todo) {
    todo.classList.remove('todoNew');
    todo.classList.add('todoComplete');
}

function setTodoNew(todo) {
    todo.classList.remove('todoComplete');
    todo.classList.add('todoNew');
}

function getTodo() {
    return input.value;
}

function isTodoValid(todo) {
    return todo !== '';
}

function addTodo(todo) {
    const html = generateHTML(todo);
    todoList.insertAdjacentHTML('beforeend', html);
}

function generateHTML(todo) {
    return `
    <tr class="todoItem">
      <td class="textTodo">${todo}</td>      
      <td class="btnTodo">                   
            <button type="button" class="deleteBtn">[Delete]</button>        
      </td>
    </tr>
  `;
}

function showError() {
    alert('Виникла помилка при доданні TODO');
}

function clearForm() {
    form.reset();
}