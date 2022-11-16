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