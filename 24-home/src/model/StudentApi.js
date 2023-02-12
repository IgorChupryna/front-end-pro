class StudentApi {
  static URL = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students/';

  static getList() {
    return fetch(StudentApi.URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not fetch student list from server');
      })
  }

  static create(student) {
    return fetch(StudentApi.URL, {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not create student on server');
      })
  }

  static update(student) {
    return fetch(StudentApi.URL + student.id, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not update student on server');
      })
  }

  static delete(id) {
    return fetch(StudentApi.URL + id, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can not delete student on server');
      })
  }
}