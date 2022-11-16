const loginElement = document.getElementById("Login");
const signupElement = document.getElementById("SignUp");
const btnElement = document.getElementById("btn");

function signup() {
    loginElement.style.left = "-400px";
    signupElement.style.left = "50px";
    btnElement.style.left = "110px";
}

function login() {
    loginElement.style.left = "50px";
    signupElement.style.left = "450px";
    btnElement.style.left = "0px";
}