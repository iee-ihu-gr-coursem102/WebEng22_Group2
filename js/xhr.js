const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

/* returns the universities */
const getUniversities = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vaseis.iee.ihu.gr/api/index.php/universities");

    xhr.onload = (response) => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.send();
};

/* returns the departments */
const getDepartments = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://vaseis.iee.ihu.gr/api/index.php/departments");

    xhr.onload = (response) => {
        const data = JSON.parse(xhr.response);
        console.log(data);
    };

    xhr.send();
};

const sendData = () => {};

/* Clicking on the GetData button calls all the above get functions */
getBtn.addEventListener('click', getUniversities);
getBtn.addEventListener('click', getDepartments);

postBtn.addEventListener('click', sendData);
