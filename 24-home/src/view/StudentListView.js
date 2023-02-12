class StudentListView {
    static STUDENT_ITEM_SELECTOR = '.studentItem';
    static EDIT_BTN_SELECTOR = '.editBtn';
    static DELETE_BTN_SELECTOR = '.deleteBtn';
    static MARK_INPUT_SELECTOR = '.markInp';

    constructor(options) {
        this.options = options;
        this.$root = this.initView();
    }

    initView() {
        return $('<tbody id="student_list"></tbody>')
            .on('click', StudentListView.EDIT_BTN_SELECTOR, this.onEditBtnClick.bind(this))
            .on('click', StudentListView.DELETE_BTN_SELECTOR, this.onDeleteBtnClick.bind(this))
            .on('focusout', StudentListView.MARK_INPUT_SELECTOR, this.onStudentMarkFocusOut.bind(this));
    }

    onEditBtnClick(e) {
        const studentItem = this.getStudentEl(e.target);
        const id = this.getStudentElId(studentItem);

        this.options.onEdit(id);
    }

    onDeleteBtnClick(e) {
        const studentItem = this.getStudentEl(e.target);
        const id = this.getStudentElId(studentItem);

        this.options.onDelete(id);
    }

    onStudentMarkFocusOut(e) {
        if(!this.isValidMark(e.target.value)){
            showError("Mark not valid!")
            return;
        }

        const studentItem = this.getStudentEl(e.target);
        const id = this.getStudentElId(studentItem);
        const marks = [];
        const marksItems = studentItem.querySelectorAll(StudentListView.MARK_INPUT_SELECTOR);

        for (let i = 0; i < marksItems.length; i++) {
            marks[i] = marksItems[i].value;
        }

        let student = {id: id, marks: marks}

        this.options.onFocusOut(student);
    }

    isValidMark(value) {
        return !isNaN(value) && value !== '';
    }

    appendTo($container) {
        $container.append(this.$root)
    }

    renderList(list) {
        const html = list.map(this.generateStudentHtml).join('');

        this.$root.html(html);
    }

    renderStudent(student) {
        const html = this.generateStudentHtml(student);

        this.$root.append(html);
    }

    remove(id) {
        const studentEl = this.getStudentElById(id)

        studentEl.remove();
    }

    generateStudentHtml(student) {
        let inputs = '';
        for (let i = 0; i < student.marks.length; i++) {
            inputs += `<input data-id="${i}" class="markInp" value="${student.marks[i]}">`;
        }
        return `<tr class="studentItem" id="" data-id="${student.id}">      
                        <td class="student-name">${student.name}</td>      
                        <td class="student-marks">${inputs}</td>
                        <td class="btnStudent">                   
                            <button type="button" class="deleteBtn">Delete</button>        
                        </td>      
                </tr>`;
    }

    getStudentEl(el) {
        return el.closest(StudentListView.STUDENT_ITEM_SELECTOR);
    }

    getStudentElId(studentEl) {
        return studentEl.dataset.id;
    }

    getStudentElById(id) {
        return document.querySelector(`[data-id="${id}"]`);
    }
}