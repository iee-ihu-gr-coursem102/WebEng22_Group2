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
    var tab = Object.keys(data[0])
    var tab2 = Object.values(data[0])
    const rowElement = document.createElement("tr");
    for (let headerText = 0 ; headerText < tab.length; headerText++) {
        if (tab[headerText] == "deptName" || tab[headerText] == "deptLogoUrl"|| tab[headerText] == "webSiteUrl" || tab[headerText] == "phone" || tab[headerText] == "email" || tab[headerText] == "uniTitle" ||tab[headerText] == "uniTitleShort" ){
                const headerElement = document.createElement("th");
                headerElement.textContent = tab[headerText];
                tableHead.querySelector("tr").appendChild(headerElement);
                    
        // adding contents
            if (tab2[headerText] != null){
                const cellElement = document.createElement("td");
                cellElement.textContent = tab2[headerText];
                rowElement.appendChild(cellElement);
            }
            else
            {
                const cellElement = document.createElement("td");
                cellElement.textContent = "-"
                rowElement.appendChild(cellElement);
            }
            tableBody.appendChild(rowElement);
    }}
}

const searchFun = () => {
    let filter = document.querySelector('#myInput').value.toUpperCase();
    let myTable = document.querySelector("table");
    let tr = myTable.getElementsByTagName('tr');
    let dept_id = find_id(filter)
    
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
//Προσπάθεια να ψάξουμε στο διαθέσιμο λογαριασμό, το όνομα της σχολής και να πάρουμε το id
async function find_id(filter){
    const response = await fetch('https://vaseis.iee.ihu.gr/api/index.php/departments/');
    const data = await response.json();

    var departments = Object.values(data);
    for (i = 0 ; i < departments.length; i++)
    {
        console.log(departments[i].name)
            console.log(filter)
            console.log("------------")
        if (departments[i].name == filter ){
            console.log(departments[i].name)
            console.log(filter)
            return departments[i].code
        }
    }
}

fillTable('https://vaseis.iee.ihu.gr/api/index.php/v1.0/bases/department/1625?type=gel-ime-gen', document.querySelector("table"));
//fillTable('https://api.spacexdata.com/latest/history', document.querySelector("table"));
