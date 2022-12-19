class ContactApi {
    static URL = 'https://6398ebbdfe03352a94e1e0ff.mockapi.io/contact/';

    static getList() {
        return fetch(ContactApi.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch contact list from server');
            }).catch((err) => showError(err));
    }

    static create(todo) {
        return fetch(ContactApi.URL, {
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
                throw new Error('Can not create contact on server');
            }).catch((err) => showError(err));
    }

    static update(contact) {
        return fetch(ContactApi.URL + contact.id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not update contact on server');
            }).catch((err) => showError(err));
    }

    static delete(id) {
        return fetch(ContactApi.URL + id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not delete contact on server');
            }).catch((err) => showError(err));
    }
}