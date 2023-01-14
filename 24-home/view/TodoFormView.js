class TodoFormView {
    static INPUTS_SELECTOR = 'input, textarea';
    static EMPTY_TODO_TEXT_ERROR = 'TODO text is empty';
    static FIRST_ITEM_FORM = 0;

    constructor(options) {
        this.options = options;
        this.$root = this.initView();
        this.$inputs = this.$root.find(TodoFormView.INPUTS_SELECTOR);
    }

    initView() {
        return $(`      
        <form id="todoForm" class="form">
            <input id="id" type="hidden"/>
            <label for="text"></label>
            <input type="text" name="todo" id="text" class="formInput"/>
            <button id="addTodoBtn">Save TODO</button>
        </form>
    `)
            .on('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(e) {
        e.preventDefault();

        const data = this.getFormData();
        this.clear();

        if (!this.isValid(data.text)) {
            showError(TodoFormView.EMPTY_TODO_TEXT_ERROR);
            return;
        }

        this.options.onSubmit(data);
    }

    appendTo($container) {
        $container.append(this.$root)
    }

    getFormData() {
        const todo = {}

        for (const input of this.$inputs) {
            todo[input.id] = input.value;
        }

        return todo;
    }

    setFormData(todo) {
        for (const input of this.$inputs) {
            const inputId = input.id;

            if (inputId in todo) {
                input.value = todo[inputId];
            }
        }
    }

    isValid(todo) {
        return todo !== '';
    }

    clear() {
        this.$root[TodoFormView.FIRST_ITEM_FORM].reset();
    }
}