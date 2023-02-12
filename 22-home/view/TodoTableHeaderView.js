class TodoTableHeaderView {
    constructor() {
        this.$root = this.initView();
    }

    initView() {
        return $('<table id="listTodo" class="listTodo">\n' +
            '  <thead>\n' +
            '  <tr>\n' +
            '    <th>DONE</th>\n' +
            '    <th>TEXT</th>\n' +
            '    <th>EDIT</th>\n' +
            '    <th>DELETE</th>\n' +
            '  </tr>\n' +
            '  </thead>\n' +
            '\n' +
            '</table>')
    }

    appendTo($container) {
        $container.append(this.$root)
    }
}