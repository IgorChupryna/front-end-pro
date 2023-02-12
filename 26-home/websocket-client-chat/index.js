const ws = new WebSocket('ws://localhost:8080')
const form = document.querySelector('#formWs');
const container = document.querySelector('#container');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();

    if (!isValidForm()) {
        showErr("form have empty field");
        return;
    }

    const message = {
        name: form.name.value,
        text: form.message.value,
    };
}

ws.onopen = () => {
    console.log('Connection with server was established');
}

ws.onmessage = (event) => {
    const obj = JSON.parse(event.data);

    renderMessage(obj);
}

ws.onclose = () => {
    console.log('Connection with server was closed');
}

ws.onerror = (error) => {
    console.log('Connection error', error);
}

function renderMessage(message) {
    const html = `<li><span class="name">${message.name}</span>: ${message.text}</li>`

    container.insertAdjacentHTML('beforeend', html);
}

function isValidForm() {
    return form.name.value !== "" && form.message.value !== "";
}

function showErr(err) {
    alert(err);
}