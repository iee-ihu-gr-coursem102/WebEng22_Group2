"use strict"

function performLogout(){

var xhttp = new XMLHttpRequest();
xhttp.open("DELETE", "https://users.iee.ihu.gr//home/student/ait/2022/i.kazlaris/public_html/NameOfPHPhere.php/", true);
xhttp.onload = function() {
  if (xhttp.readyState == 4 && xhttp.status == 204){
    sessionStorage.setItem('connected','false');
    sessionStorage.removeItem('username');
    location.reload();
  }
  else {
    window.alert("Σφάλμα αποσύνδεσης");
  }
}

//xhttp.withCredentials = true
xhttp.send();
}