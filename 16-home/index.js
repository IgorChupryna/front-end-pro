const DATA_URL = "https://api.github.com/users/";

const getDataBtn = document.querySelector('#getData');
const container = document.querySelector('#container');

getDataBtn.addEventListener('click', onGetDataBtnClick);

function onGetDataBtnClick() {
    const getNameInput = document.querySelector('#name').value;

    getData(getNameInput)
        .then((data) => renderData(data))
        .catch((err) => renderError(err))
}

function renderData(data) {
    container.innerHTML = generateDataHtml(data);
}

function renderError(err) {
    container.innerHTML = generateErrorHtml(err);
}

function generateDataHtml(data) {
    return `
    <div>
      <h4>${data.login}</h4>      
      <img src="${data.avatar_url}" alt="">
      <div>Public repositories: ${data.public_repos}</div>      
      <div>Followers: ${data.followers}</div>
      <div>Following: ${data.following}</div>
    </div>
  `;
}

function generateErrorHtml(err) {
    return `
    <div>
        <h4>Error</h4>
        <div>${err}</div>
    </div> 
    `;
}

function getData(name) {
    return fetch(`${DATA_URL}${name}`)
        .then(res => {

            if (res.ok) {
                return res.json();
            }

            if (res.status === 404) {
                throw new Error(`User [${name}] not found!`);
            }
        })
}