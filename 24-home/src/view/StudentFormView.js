class StudentFormView {
    static INPUTS_SELECTOR = 'input, textarea';
    static EMPTY_STUDENT_TEXT_ERROR = 'STUDENT text is empty';
    static FIRST_ITEM_FORM = 0;

    constructor(options) {
        this.options = options;
        this.$root = this.initView();
        this.$inputs = this.$root.find(StudentFormView.INPUTS_SELECTOR);
    }

    initView() {
        return $(`      
        <form id="studentForm" class="form">
            <input id="id" type="hidden"/>
            <label for="name"></label>
            <input type="text" name="student" id="name" class="formInput"/>
            <button id="addStudentBtn">Save STUDENT</button>
        </form>
    `)
            .on('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(e) {
        e.preventDefault();

        const data = this.getFormData();
        this.clear();

        if (!this.isValid(data.text)) {
            showError(StudentFormView.EMPTY_STUDENT_TEXT_ERROR);
            return;
        }

        this.options.onSubmit(data);
    }

    appendTo($container) {
        $container.append(this.$root)
    }

    getFormData() {
        const student = {}

        for (const input of this.$inputs) {
            student[input.id] = input.value;
        }

        return student;
    }

    setFormData(student) {
        for (const input of this.$inputs) {
            const inputId = input.id;

            if (inputId in student) {
                input.value = student[inputId];
            }
        }
    }

    isValid(student) {
        return student !== '';
    }

    clear() {
        this.$root[StudentFormView.FIRST_ITEM_FORM].reset();
    }
}