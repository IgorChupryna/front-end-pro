class ContactApi {
    static URL = 'https://6398ebbdfe03352a94e1e0ff.mockapi.io/contact/';

    static request(url = '', method = 'GET', body) {
        return fetch(ContactApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not execute request to server');
            })
    }

    static getList() {
        return ContactApi.request()
            .catch(() => {
                throw new Error('Can not fetch contact list from server');
            })
    }

    static create(contact) {
        return ContactApi.request('', 'POST', contact)
            .catch(() => {
                throw new Error('Can not create contact on server');
            })
    }

    static update(contact) {
        return ContactApi.request(contact.id, 'PUT', contact)
            .catch(() => {
                throw new Error('Can not update contact on server');
            })
    }

    static delete(id) {
        return ContactApi.request(id, 'DELETE')
            .catch(() => {
                throw new Error('Can not delete contact on server');
            })
    }
}