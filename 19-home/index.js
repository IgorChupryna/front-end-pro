'use strict'

const ALBUM_ITEM_CLASS = 'album-item';

const FIRST_SHOW_ELEMENT = 1;
const listAlbum = document.querySelector('#listAlbum');
const listPhoto = document.querySelector('#listPhoto');

listAlbum.addEventListener('click', onListAlbumClick);

main();

function main() {
    Album.getList()
        .then((albumList) => {
            console.log(albumList)
            renderAlbumList(albumList);
        })
    Photo.getListByAlbumId(FIRST_SHOW_ELEMENT)
        .then((photoList) => {
            renderPhotoByAlbumIdList(photoList);
        })
}

function onListAlbumClick(e) {
    const id = getAlbumElId(e.target);

    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
        Photo.getListByAlbumId(id)
            .then((photoList) => {
                renderPhotoByAlbumIdList(photoList);
            })
    }
}

function getAlbumElId(albumEl) {
    return albumEl.dataset.id;
}

function renderPhotoByAlbumIdList(list) {
    listPhoto.innerHTML = list.map(generatePhotoHTML).join('');
}

function generatePhotoHTML(photo) {
    return `
    <img src="${photo.url}" class="gallery__img" alt="Photo">
  `;
}

function renderAlbumList(list) {
    listAlbum.innerHTML = list.map(generateAlbumHTML).join('');
}

function generateAlbumHTML(album) {
    return `
    <li>
        <a href="#" class="${ALBUM_ITEM_CLASS}" data-id="${album.id}">${album.title}</a>
    </li>       
  `;
}

function showError(err) {
    alert(err);
}