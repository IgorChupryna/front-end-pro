export default class AlbumApi {
    static URL = 'https://jsonplaceholder.typicode.com/albums?userId=';

    static getList(id) {
        return fetch(AlbumApi.URL + id)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch albums list from server');
            })
    }
}