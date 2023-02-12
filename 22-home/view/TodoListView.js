class TodoListView {
  static TODO_ITEM_SELECTOR = '.todoItem';
  static EDIT_BTN_SELECTOR = '.editBtn';
  static DELETE_BTN_SELECTOR = '.deleteBtn';
  static STATUS_ITEM_SELECTOR = '.textTodo';

  constructor(options) {
    this.options = options;
    this.$root = this.initView();
  }

  initView() {
    return $('<tbody id="todo_list"></tbody>')
      .on('click', TodoListView.EDIT_BTN_SELECTOR, this.onEditBtnClick.bind(this))
      .on('click', TodoListView.DELETE_BTN_SELECTOR, this.onDeleteBtnClick.bind(this))
      .on('click', TodoListView.STATUS_ITEM_SELECTOR, this.onStatusItemClick.bind(this))
  }

  onEditBtnClick(e) {
    const todoItem = this.getTodoEl(e.target);
    const id = this.getTodoElId(todoItem);

    this.options.onEdit(id);
  }

  onDeleteBtnClick(e) {
    const todoItem = this.getTodoEl(e.target);
    const id = this.getTodoElId(todoItem);
    console.log(this.options)
    this.options.onDelete(id);
  }

  onStatusItemClick(e){
    const el = e.target;
    const todoItem = this.getTodoEl(el);
    const id = this.getTodoElId(todoItem);

    el.classList.contains('todoComplete') ? this.setTodoNew(id, el) : this.setTodoCompleted(id, el);
  }

  setTodoNew(id, el){
    const todo = {id: id, done: false}
    el.classList.remove('todoComplete');
    el.classList.add('todoNew');

    this.options.onChangeStatus(todo);
  }

  setTodoCompleted(id, el){
    const todo = {id: id, done: true}
    el.classList.remove('todoNew');
    el.classList.add('todoComplete');

    this.options.onChangeStatus(todo);
  }

  appendTo($container) {
    $container.append(this.$root)
  }

  renderList(list) {
    const html = list.map(this.generateTodoHtml).join('');

    this.$root.html(html);
  }

  renderTodo(todo) {
    const html = this.generateTodoHtml(todo);

    this.$root.append(html);
  }

  replaceTodo(id, todo) {
    const oldTodoEl = this.getTodoElById(id)
    oldTodoEl.outerHTML = this.generateTodoHtml(todo);
  }

  remove(id) {
    const todoEl = this.getTodoElById(id)

    todoEl.remove();
  }

  generateTodoHtml(todo) {
    return `
      <tr class="todoItem" data-id="${todo.id}">
      <td class="textTodo ${todo.done ? 'todoComplete' : 'todoNew'}"></td>
      <td>${todo.text}</td>
      <td class="btnTodo">                   
            <button type="button" class="editBtn">Edit</button>        
      </td>
      <td class="btnTodo">                   
            <button type="button" class="deleteBtn">Delete</button>        
      </td>      
    </tr>
    `;
  }

  getTodoEl(el) {
    return el.closest(TodoListView.TODO_ITEM_SELECTOR);
  }

  getTodoElId(todoEl) {
    return todoEl.dataset.id;
  }

  getTodoElById(id) {
    return document.querySelector(`[data-id="${id}"]`);
  }
}