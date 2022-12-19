'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const UPDATE_BTN_CLASS = 'updateBtn';
const TODO_ITEM_SELECTOR = '.todoItem';
const EMPTY_TODO_TEXT_ERROR = 'TODO text is empty';

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const todoList = document.querySelector('#todo_list');

form.addEventListener('submit', onAddTodoBtnClick);
todoList.addEventListener('click', onTodoListClick);

main();

function main() {
    TodoApi.getList()
        .then((todoList) => {
            renderTodoList(todoList);
        })
}

function onAddTodoBtnClick(e) {
    e.preventDefault();

    const todo = getTodo();

    if (!isTodoValid(todo)) {
        showError(EMPTY_TODO_TEXT_ERROR);
        return;
    }

    TodoApi.create(todo)
        .then((newTodo) => {
            renderTodo(newTodo);
            clearForm();
        })
}

function onTodoListClick(e) {
    const target = e.target;
    const todoEl = getTodoEl(target);
    const id = getTodoElId(todoEl);




    if (target.classList.contains(DELETE_BTN_CLASS)) {
        TodoApi.delete(id)
            .then(() => {
                todoEl.remove();
            })

    } else if (target.classList.contains('textTodo')) {
        e.preventDefault();
        target.classList.contains('todoComplete') ? setTodoNew(id, target) : setTodoCompleted(id, target);
    } else if (target.classList.contains(UPDATE_BTN_CLASS)) {
        const inp = todoEl.querySelector(".inputTodo");
        const text = inp.value;
        const todo = {id: id, text: text};
        TodoApi.update(todo)
            .then(() => {
                inp.classList.add("todoUpd");
                setTimeout(() => {
                    inp.classList.remove("todoUpd");
                }, 2000)
            })
    }
}

function setTodoCompleted(id, todoEl) {
    const todo = {id: id, done: true}
    TodoApi.update(todo)
        .then(() => {
            todoEl.classList.remove('todoNew');
            todoEl.classList.add('todoComplete');
        })
}

function setTodoNew(id, todoEl) {
    const todo = {id: id, done: false}
    TodoApi.update(todo)
        .then(() => {
            todoEl.classList.remove('todoComplete');
            todoEl.classList.add('todoNew');
        })
}

function getTodo() {
    return {
        text: input.value,
    };
}

function isTodoValid(todo) {
    return todo !== '';
}

function renderTodoList(list) {
    todoList.innerHTML = list.map(generateHTML).join('');
}

function renderTodo(todo) {
    const html = generateHTML(todo);
    todoList.insertAdjacentHTML('beforeend', html);
}

function generateHTML(todo) {
    return `
    <tr class="todoItem" data-id="${todo.id}">
      <td class="textTodo ${todo.done ? 'todoComplete' : 'todoNew'}"></td>
      <td><input type="text" class="inputTodo" value="${todo.text}"></td>
      <td class="btnTodo">                   
            <button type="button" class="updateBtn">UpdateText</button>        
      </td>
      <td class="btnTodo">                   
            <button type="button" class="deleteBtn">Delete</button>        
      </td>      
    </tr>
  `;
}

function getTodoEl(el) {
    return el.closest(TODO_ITEM_SELECTOR);
}

function getTodoElId(todoEl) {
    return todoEl.dataset.id;
}

function clearForm() {
    form.reset();
}

function showError(err) {
    alert(err);
}