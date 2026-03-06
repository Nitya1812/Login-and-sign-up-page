
// SIGNUP LOGIC

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();
let confirmPassword = document.getElementById("confirmPassword").value.trim();

let valid = true;

// Name validation
if(name.length < 3){
document.getElementById("nameError").innerText = "Name must be at least 3 characters";
valid = false;
}else{
document.getElementById("nameError").innerText = "";
}

// Email validation
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerText = "Enter valid email";
valid = false;
}else{
document.getElementById("emailError").innerText = "";
}

// Password validation
if(password.length < 6){
document.getElementById("passwordError").innerText = "Password must be 6 characters";
valid = false;
}else{
document.getElementById("passwordError").innerText = "";
}

// Confirm password
if(password !== confirmPassword){
document.getElementById("confirmError").innerText = "Passwords do not match";
valid = false;
}else{
document.getElementById("confirmError").innerText = "";
}

// Store user
if(valid){

let user = {
name:name,
email:email,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup Successful");

window.location.href = "login.html";

}

});

}


// LOGIN LOGIC

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && email === storedUser.email && password === storedUser.password){

alert("Login Successful");

}else{

alert("Invalid Email or Password");

}

});

}