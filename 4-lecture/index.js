function createUser(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        singIn: false
    }
}


createUser('John', 'Snow', 42)


const person = ['Tom', 'Smith', 42, 'Ukraine', 'Kyiv'];

const [firstName='Unknown', lastName, age = 0, ...rest] = person;

console.log(firstName, lastName, age, rest)

