export default class PhotoApi {
    static URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

    static getListByAlbumId(id) {
        return fetch(PhotoApi.URL + id)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch photo list by album id from server');
            })
    }
}