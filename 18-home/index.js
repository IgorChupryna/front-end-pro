'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const UPDATE_BTN_CLASS = 'updateBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';
const FORM_NOT_VALID_TEXT_ERROR = "[Error] Form data is not valid!";

const listContact = document.querySelector('#bodyContact');
const idInput = document.querySelector('#contactId');

const inputName = document.querySelector('#inpName');
const inputSurname = document.querySelector('#inpSurname');
const inputPhone = document.querySelector('#inpPhone');
const form = document.querySelector('#contactForm');

let contactList = [];

form.addEventListener('submit', onFormSubmit);
listContact.addEventListener('click', onBodyContactClick);

main();

function main() {
    ContactApi.getList()
        .then((todoList) => {
            contactList = todoList;
            renderContactList(todoList);
        })
}

function onFormSubmit(e) {
    e.preventDefault();

    const contact = getContact();

    if (!isFormValid(contact)) {
        showError(FORM_NOT_VALID_TEXT_ERROR);
        return;
    }

    if (contact.id) {
        ContactApi.update(contact)
            .then((newContact) => {
                updateContactKeys(contact.id, newContact);
                clearForm();
            })
            .catch(showError)

        replaceContact(contact);
    } else {
        ContactApi.create(contact)
            .then((newContact) => {
                contactList.push(newContact);
                renderContact(newContact);
                clearForm();
            })
    }
}

function onBodyContactClick(e) {
    const contactItem = getContactEl(e.target);
    const id = getContactElId(contactItem);
    const contact = findContactById(id);

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        ContactApi.delete(id)
            .then(() => {
                contactItem.remove()
            })
    } else if (e.target.classList.contains(UPDATE_BTN_CLASS)) {
        fillForm(contact);
    }
}

function replaceContact(contact) {
    const oldContactEl = document.querySelector(`[data-id="${contact.id}"]`);

    oldContactEl.outerHTML = generateHTML(contact);
}

function getContact() {
    return {
        id: idInput.value,
        name: inputName.value,
        surname: inputSurname.value,
        phone: inputPhone.value
    }
}

function fillForm(contact) {
    idInput.value = contact.id;
    inputName.value = contact.name;
    inputSurname.value = contact.surname;
    inputPhone.value = contact.phone;
}

function findContactById(id) {
    return contactList.find(item => item.id === id);
}

function updateContactKeys(id, changes) {
    const oldContact = findContactById(id)

    Object.keys(changes).forEach(key => oldContact[key] = changes[key]);
}

function renderContactList(list) {
    listContact.innerHTML = list.map(generateHTML).join('');
}

function generateHTML(contact) {
    return `
    <tr class="contactItem" data-id="${contact.id}">     
      <td>${contact.name}</td>
      <td>${contact.surname}</td>
      <td>${contact.phone}</td>
      <td class="btnContact">                   
            <button type="button" class="updateBtn">Update</button>        
      </td>
      <td class="btnContact">                   
            <button type="button" class="deleteBtn">Delete</button>        
      </td>      
    </tr>
  `;
}

function isFormValid(contact) {
    return contact.name !== '' && contact.surname !== '' && !isNaN(contact.phone) && contact.phone !== '';
}

function renderContact(contact) {
    const html = generateHTML(contact);

    listContact.insertAdjacentHTML('beforeend', html)
}

function getContactEl(el) {
    return el.closest(CONTACT_ITEM_SELECTOR);
}

function getContactElId(contactEl) {
    return contactEl.dataset.id;
}

function clearForm() {
    form.reset();
}

function showError(err) {
    alert(err);
}