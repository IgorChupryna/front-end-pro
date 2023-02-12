class StudentTableHeaderView {
    constructor() {
        this.$root = this.initView();
    }

    initView() {
        return $('<table id="listStudent" class="listStudent">\n' +
            '  <thead>\n' +
            '  <tr>\n' +
            '    <th>NAME</th>\n' +
            '    <th>MARKS</th>\n' +
            '    <th>ACTIONS</th>\n' +
            '  </tr>\n' +
            '  </thead>\n' +
            '\n' +
            '</table>')
    }

    appendTo($container) {
        $container.append(this.$root)
    }
}