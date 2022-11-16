const login = document.getElementById("Login");
const signup = document.getElementById("SignUp");
const btn = document.getElementById("btn");

function signup() {
    login.style.left = "-400px";
    signup.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    login.style.left = "-50px";
    signup.style.left = "450px";
    btn.style.left = "0px";
}