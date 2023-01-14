'use strict'

const DELETE_BTN_SELECTOR = '.deleteBtn';
const STICKER_ITEM_SELECTOR = '.item_sticker';
const STICKER_TEXTAREA_SELECTOR = '.ta-sticker';

const $stickerContainer = $('#stickerContainer');
const $btnAddSticker = $('#btnAddSticker');

let stickerList = [];

$btnAddSticker.on('click', onAddStickerBtnClick);

$stickerContainer
    .on('click', DELETE_BTN_SELECTOR, onStickerDeleteClick)
    .on('focusout', STICKER_TEXTAREA_SELECTOR, onStickerEditClick);

main();

function main() {
    Sticker.getList()
        .then((stickersList) => {
            stickerList = stickersList;
            renderStickerList(stickersList);
        })
}

function onAddStickerBtnClick() {
    const sticker = getDefaultSticker();

    Sticker.create(sticker)
        .then((newSticker) => {
            stickerList.push(newSticker);
            renderSticker(newSticker);
        })
}

function onStickerDeleteClick() {
    const stickerEl = findStickerEl($(this));
    const sticker = findStickerByStickerEl(stickerEl)

    if (sticker) {
        Sticker.delete(sticker.id)
            .then(() => {
                stickerEl.fadeOut(500, function () {
                    stickerEl.remove();
                })
            })
    }
}

function onStickerEditClick() {
    const stickerEl = findStickerEl($(this));
    let sticker = findStickerByStickerEl(stickerEl);
    sticker.description = $(this).val();

    if (sticker) {
        updateKeys(sticker.id, sticker);
        Sticker.update(sticker).then();
    }
}

function updateKeys(id, changes) {
    const oldSticker = findStickerById(id)

    Object.keys(changes).forEach(key => oldSticker[key] = changes[key]);
}

function renderSticker(sticker) {
    const html = generateStickerHTML(sticker);
    $stickerContainer.append(html).children(':last')
        .hide()
        .fadeIn(500);
}

function getDefaultSticker() {
    return {
        description: ""
    }
}

function findStickerById(id) {
    return stickerList.find(item => item.id === id);
}

function findStickerByStickerEl($stickerEl) {
    const id = $stickerEl.data('id');

    return findStickerById(String(id));
}

function findStickerEl($el) {
    return $el.closest(STICKER_ITEM_SELECTOR);
}

function renderStickerList(list) {
    const htmlArr = list.map(generateStickerHTML);

    $stickerContainer.html(htmlArr);
}

function generateStickerHTML(sticker) {
    return `    
    <div class="gallery__img item_sticker" data-id="${sticker.id}">
        <div class="deleteBtn">X</div>
        <textarea class="ta-sticker" rows="2" >${sticker.description}</textarea>    
    </div>          
  `;
}

function showError(err) {
    alert(err);
}