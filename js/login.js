"use strict"

const loginElement = document.getElementById("Login");
const signupElement = document.getElementById("SignUp");
const btnElement = document.getElementById("btn");
const showPassword = document.getElementById("show-password");
const showPassword1 = document.getElementById("show-password1");
const showPassword2 = document.getElementById("show-password2");
const passwordField = document.getElementById("password");
const password1Field = document.getElementById("password1");
const password2Field = document.getElementById("password2")

function signup() {
    loginElement.style.left = "-400px";
    signupElement.style.left = "50px";
    btnElement.style.left = "110px";
}

showPassword1.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = password1Field.getAttribute("type") === "password" ? "text" : "password";
    password1Field.setAttribute("type", type);
})

showPassword2.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = password2Field.getAttribute("type") === "password" ? "text" : "password";
    password2Field.setAttribute("type", type);
})

function login() {
    loginElement.style.left = "50px";
    signupElement.style.left = "450px";
    btnElement.style.left = "0px";
}

showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})

function performLogin(){

const username = document.getElementById("login-username").value;
const password = document.getElementById("password").value;

var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://users.iee.ihu.gr//home/student/ait/2022/i.kazlaris/public_html/NameOfPHPhere.php/", false);
xhttp.onload = function() {
  if (this.status == 201){
	alert("Καλως ήρθατε");
    sessionStorage.setItem('connected','true');
    sessionStorage.setItem('username', username);
    location.reload();
  }
  else if (xhttp.readyState == 4 && xhttp.status == 401)
    window.alert("Σφάλμα σύνδεσης");
}
//xhttp.withCredentials = true;
xhttp.send('{"username" : "' + username + '", "password" : "' + password + '"}');
} 