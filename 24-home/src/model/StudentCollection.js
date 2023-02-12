class StudentCollection {
    #list = [];

    fetch() {
        return StudentApi.getList()
            .then((list) => {
                this.#list = list;

                return this.#list;
            })
    }

    save(student) {
        return StudentApi.create(student)
            .then((newStudent) => {
                this.#list.push(newStudent);

                return newStudent;
            })
    }

    edit(student) {
        return StudentApi.update(student)
            .then((newStudent) => {
                this.updateStudentKeys(student.id, newStudent);

                return newStudent;
            })
    }

    delete(id) {
        return StudentApi.delete(id);
    }

    updateStudentKeys(id, changes) {
        const oldStudent = this.get(id)

        Object.keys(changes).forEach(key => oldStudent[key] = changes[key]);
    }

    get(id) {
        return this.#list.find(item => item.id === id);
    }
}