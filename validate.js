// Let's verify that the user added a valid email address

const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
const str = document.getElementById("email");

if (regexExp.test(str) === True)
    console.log("The email is valid");
else
    console.log("Please enter a valid email address");

/* Let's verify the user confirmed his/her password

const passOne = document.getElementById("password");
const passTwo = document.getElementById("confirm-password");

if (passOne.value != passTwo.value)
    alert("The passwords do not match!");
*/