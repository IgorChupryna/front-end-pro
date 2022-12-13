class TodoApi {
    static URL = 'https://6398ebbdfe03352a94e1e0ff.mockapi.io/todo/';

    static get(id) {
        return fetch(TodoApi.URL + id)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not fetch todo from server');
            }).catch((err) => showError(err));
    }

    static getList() {
        return fetch(TodoApi.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not fetch todo list from server');
            }).catch((err) => showError(err));
    }

    static create(todo) {
        return fetch(TodoApi.URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not create todo on server');
            }).catch((err) => showError(err));
    }

    static update(todo) {
        return fetch(TodoApi.URL + todo.id, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not update todo on server');
            }).catch((err) => showError(err));
    }

    static delete(id) {
        return fetch(TodoApi.URL + id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not delete todo on server');
            }).catch((err) => showError(err));
    }
}