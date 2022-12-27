class Album {
    static URL = 'https://jsonplaceholder.typicode.com/albums';

    static getList() {
        return fetch(Album.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch albums list from server');
            }).catch((err) => showError(err));
    }
}