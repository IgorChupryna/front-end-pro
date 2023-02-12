class StudentController {
    constructor($root) {
        this.collection = new StudentCollection();

        this.formView = new StudentFormView({
            onSubmit: (student) => this.save(student),
        });

        this.listView = new StudentListView({
            onFocusOut: student => this.edit(student),
            onDelete: id => this.delete(id),
        });

        this.defaultTable = new StudentTableHeaderView();
        this.defaultTable.appendTo($root);

        this.listView.appendTo(this.defaultTable.$root);
        this.formView.appendTo($root);

        this.collection
            .fetch()
            .then((list) => {
                this.listView.renderList(list);
            })
    }

    save(student) {
        this.collection
            .save(student)
            .then((newStudent) => {
                this.listView.renderStudent(newStudent);
            });
    }

    edit(student) {
        this.collection
            .edit(student);
    }

    delete(id) {
        this.collection
            .delete(id)
            .then(() => {
                this.listView.remove(id);
            })
    }
}