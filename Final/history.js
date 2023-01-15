async function fillTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    // console.log(Object.values(data[0]));
    // clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";
    // putting headers  
    for (const headerText in data[0]) {
        const headerElement = document.createElement("th");
        headerElement.textContent = headerText.charAt(0).toUpperCase() + headerText.slice(1);
        tableHead.querySelector("tr").appendChild(headerElement);
    }
        for (let i = 0; i < data.length; i++) {
            const obj = Object.values(data[i]);
            const obj2 = Object.keys(data[i]);
            const rowElement = document.createElement("tr");
           
            for (let cellText in obj) {
                if (obj[cellText] == null){
                    const cellElement = document.createElement("td");
                    cellElement.textContent = "-";
                    rowElement.appendChild(cellElement);
                }
                else {
                    const cellElement = document.createElement("td");
                    if(obj2[cellText] == "code")
                    {
                        cellElement.innerHTML = `<a onclick="baseis(${obj[cellText]})"><u>${obj[cellText]}</u></a>`;
                        rowElement.appendChild(cellElement);    
                    }
                    else {
                        cellElement.textContent = obj[cellText];
                        rowElement.appendChild(cellElement);
                    }
                }
            }
            tableBody.appendChild(rowElement);
        }
    }
async function baseis(identity){
    const response = await fetch(`https://vaseis.iee.ihu.gr/api/index.php/bases/department/${identity}?type=gel-ime-gen&details=full`);
    const data = await response.json();
    let vaseis =`Βάσεις ανά έτος: \n`;
    for (let i = 0; i < data.records.length; i++) {
        const obj = Object.values(data.records[i]);
        vaseis = vaseis+(`${obj[7]}: ${obj[6]} \n`);     
    }       
    alert(vaseis);
}

const searchFun = () => {
    let filter = document.querySelector('#myInput').value.toUpperCase();
    let myTable = document.querySelector(".table");
    let tr = myTable.getElementsByTagName('tr');
    
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textVal = td.textContent || td.innerHTML;
            if (textVal.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}
//---------------------------------------------------------------------
async function fillTable2(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    // console.log(Object.values(data[0]));
    // clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";
    
   
    // putting headers  
    for (const headerText in data.records[0]) {
        const headerElement = document.createElement("th");
        headerElement.textContent = headerText.charAt(0).toUpperCase() + headerText.slice(1);
        tableHead.querySelector("tr").appendChild(headerElement);
    }
        for (let i = 0; i < data.records.length; i++) {
            const obj = Object.values(data.records[i]);
            const rowElement = document.createElement("tr");
            
            for (let cellText in obj) {
                if (obj[cellText] == null){
                    const cellElement = document.createElement("td");
                    cellElement.textContent = "-";
                    rowElement.appendChild(cellElement);
                }
                else {
                    const cellElement = document.createElement("td");
                    cellElement.textContent = obj[cellText];
                    rowElement.appendChild(cellElement);
                }
            }
            tableBody.appendChild(rowElement);
        }
    }
    const searchUni = () => {
        let filter = document.querySelector('#myInput2').value.toUpperCase();
        let myTable = document.querySelector(".table2");
        let tr = myTable.getElementsByTagName('tr');
        
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[1];
    
            if (td) {
                let textVal = td.textContent || td.innerHTML;
                if (textVal.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
    
        }
    }
fillTable('https://vaseis.iee.ihu.gr/api/index.php/departments/', document.querySelector(".table"));
fillTable2('https://vaseis.iee.ihu.gr/api/index.php/universities/', document.querySelector(".table2"));
