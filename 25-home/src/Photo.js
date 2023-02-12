class Photo {
    static URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

    static getListByAlbumId(id) {
        return fetch(Photo.URL + id)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch photo list by album id from server');
            }).catch((err) => showError(err));
    }
}

export default Photo;