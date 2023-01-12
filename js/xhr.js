const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vaseis.iee.ihu.gr/api/index.php/v1.0/bases/department/1625?type=gel-ime-gen");

    xhr.onload = (response) => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.send();
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
