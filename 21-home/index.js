/*
Берем домашку 'ДЗ 18. Книга контактов + сервер', из 20 урока ту что сделали вы, или возьмите мою реализацию.

1) Вынести форму создания и редактирования в модальное окно, как на уроке
2) Добавить вверху справа кнопку "Добавить", для открытия модального окна
3) При клике на "редактировать" модалка открывается с заполнеными полями соответствующего контакта (не обязательно)
4) Рендер списка контактов тоже реализовать с помощью jquery
 */

'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const UPDATE_BTN_CLASS = 'updateBtn';

const ADD_CONTACT_SELECTOR = '#addContactBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';

const FORM_NOT_VALID_TEXT_ERROR = "[Error] Form data is not valid!";
const FORM_DOM_EL = 0;

const $contactContainer = $('#bodyContact');
const $inputs = $('.formInput');

let contactList = [];

$(ADD_CONTACT_SELECTOR).on('click', onAddContactBtnClick);

$contactContainer
    .on('click', '.' + DELETE_BTN_CLASS, onContactDeleteClick)
    .on('click', '.' + UPDATE_BTN_CLASS, onContactEditClick);

const dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            saveContact();
        },
        Cancel: function() {
            dialogClose()
        }
    },
    close: function() {
        dialogClose()
    }
});

const form = dialog.find("form")[FORM_DOM_EL];

main();

function main() {
    ContactApi.getList()
        .then((list) => {
            contactList = list;
            renderContactList(list);
        }).catch(showError)
}

function onAddContactBtnClick() {
    dialog.dialog("open");
}

function saveContact() {
    const contact = getContact();

    if (!isFormValid(contact)) {
        showError(FORM_NOT_VALID_TEXT_ERROR);
        return;
    }

    if (contact.id) {
        ContactApi.update(contact)
            .then((newContact) => {
                updateContactKeys(contact.id, newContact);
                dialogClose();
            })
            .catch(showError)

        replaceContact(contact);
    } else {
        ContactApi.create(contact)
            .then((newContact) => {
                contactList.push(newContact);
                renderContact(newContact);
                dialogClose();
            }).catch(showError)
    }
}

function onContactDeleteClick() {
    const $contactItem = getContactEl($(this));
    const contact = findContactByContactEl($contactItem);

    if (contact) {
        ContactApi.delete(contact.id)
            .then(() => {
                $contactItem.remove()
            }).catch(showError)
    }
}

function onContactEditClick() {
    const $contactItem = getContactEl($(this));
    const contact = findContactByContactEl($contactItem);

    if (contact) {
        setFormData(contact)
        dialog.dialog("open");
    }
}

function replaceContact(contact) {
    const oldContactEl = document.querySelector(`[data-id="${contact.id}"]`);

    oldContactEl.outerHTML = generateHTML(contact);
}

function getContact() {
    const contact = {};

    for (const { name, value } of $inputs) {
        contact[name] = value;
    }

    return contact;
}

function setFormData(contact) {
    for (const input of $inputs) {
        if (Object.hasOwn(contact, input.name)) {
            input.value = contact[input.name];
        }
    }
}

function findContactById(id) {
    return contactList.find(item => item.id === id);
}

function updateContactKeys(id, changes) {
    const oldContact = findContactById(id)

    Object.keys(changes).forEach(key => oldContact[key] = changes[key]);
}

function renderContactList(list) {
    $contactContainer.html(list.map(generateHTML));
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

    $contactContainer.append(html);
}

function getContactEl($el) {
    return $el.closest(CONTACT_ITEM_SELECTOR);
}

function findContactByContactEl($contactEl) {
    const id = $contactEl.data('id');

    return findContactById(String(id));
}

function dialogClose() {
    form.reset();
    dialog.dialog("close");
}

function showError(err) {
    alert(err);
}