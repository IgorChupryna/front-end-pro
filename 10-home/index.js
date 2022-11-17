const addContactButton = document.querySelector('#btnAddContact');
const bd = document.querySelector('#bodyContact');

const inputName = document.querySelector('#inpName');
const inputSurname = document.querySelector('#inpSurname');
const inputPhone = document.querySelector('#inpPhone');

addContactButton.addEventListener('click', onTableContactClick);
bd.addEventListener('click', onBodyContactClick);


function onTableContactClick() {
    const name = getName();
    const surname = getSurname();
    const phone = getPhone();

    if (!isFormValid(name, surname, phone)) {
        showError();
        return;
    }

    addContact(name, surname, phone);
    clearInputs();
}

function onBodyContactClick(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const elContact = event.target.closest('.elContact');
        elContact.remove()
    }
}

function isFormValid(name, surname, phone) {
    return name !== '' && surname !== '' && !isNaN(phone) && phone !== '';
}

function showError() {
    alert('Виникла помилка при доданні контакту');
}

function addContact(name, surname, phone) {
    const html = generateTemplContact(name, surname, phone);

    bd.insertAdjacentHTML('beforeend', html)
}

function generateTemplContact(name, surname, phone) {
    return `
    <tr class="elContact">
        <td>${name}</td>
        <td>${surname}</td>
        <td>${phone}</td>
        <td>
            <button class="deleteBtn" type="submit">Delete</button>
        </td>
    </tr>
  `;
}

function getName() {
    return inputName.value;
}

function getSurname() {
    return inputSurname.value;
}

function getPhone() {
    return inputPhone.value;
}

function clearInputs() {
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = '';
}