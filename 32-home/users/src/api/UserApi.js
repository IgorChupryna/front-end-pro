export default class UserApi {
    static URL = 'https://jsonplaceholder.typicode.com/users';

    static getList() {
        return fetch(UserApi.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Can not fetch users list from server');
            })
    }
}
