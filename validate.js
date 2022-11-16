const loginForm = document.getElementById("Login")

loginForm.addEventListener("submit", function (event) {
    event.preventDefault() // prevents the form from auto-submitting

    const username = document.getElementById("login-username").value
    console.log(username)

    const password = document.getElementById("password").value
    console.log(password)
})

const signupForm = document.getElementById("SignUp")

// document.getElementById("submit").disabled = true;

signupForm.addEventListener("submit", function (event) {
    event.preventDefault() // prevents the form from auto-submitting

    const username = document.getElementById("signup-username").value
    console.log(username)

    const email = document.getElementById("email").value
    console.log(email)
    
    const pw1 = document.getElementById("password1").value

    if (pw1.length < 8) {
        alert("Password must be at least 8 characters")
        document.getElementById("submit").disabled = true;
    }
    else
        console.log(pw1)

    const pw2 = document.getElementById("password2").value
    console.log(pw2)

    if (pw1 != pw2) {
        alert("Passwords do not match!");
        return false;
    }
})