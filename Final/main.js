/*async function loadIntoTable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { id, title} = await response.json();
    const data = await response.json();
    console.log(data)


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

