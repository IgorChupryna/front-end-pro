class Sticker {
    static URL = 'https://62054479161670001741b708.mockapi.io/api/stickers/';

    static getList() {
        return fetch(Sticker.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch sticker list from server');
            }).catch((err) => showError(err));
    }

    static create(sticker) {
        return fetch(Sticker.URL, {
            method: 'POST',
            body: JSON.stringify(sticker),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not create sticker on server');
            }).catch((err) => showError(err));
    }

    static update(sticker) {
        return fetch(Sticker.URL + sticker.id, {
            method: 'PUT',
            body: JSON.stringify(sticker),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not update sticker on server');
            }).catch((err) => showError(err));
    }

    static delete(id) {
        return fetch(Sticker.URL + id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not delete sticker on server');
            }).catch((err) => showError(err));
    }
}