class TodoController {
  constructor($root) {
    this.collection = new TodoCollection();

    this.formView = new TodoFormView({
      onSubmit: (todo) => this.save(todo),
    });

    this.listView = new TodoListView({
      onEdit: id => this.formView.setFormData(this.collection.get(id)),
      onDelete: id => this.delete(id),
      onChangeStatus: (todo) => this.save(todo),
    });

    this.defaultTable = new TodoTableHeaderView();

    this.defaultTable.appendTo($root);

    this.listView.appendTo(this.defaultTable.$root);
    this.formView.appendTo($root);

    this.collection
      .fetch()
      .then((list) => {
        this.listView.renderList(list);
      })
  }

  save(todo) {
    this.collection
      .save(todo)
      .then((newTodo) => {
        if (todo.id) {
          this.listView.replaceTodo(newTodo.id, newTodo);
        } else {
          this.listView.renderTodo(newTodo);
        }
      });
  }

  delete(id) {
    this.collection
      .delete(id)
      .then(() => {
        this.listView.remove(id);
      })
  }
}