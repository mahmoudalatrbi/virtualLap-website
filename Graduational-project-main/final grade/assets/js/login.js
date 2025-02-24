// Variable Declaration
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");


// Login button function
loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255,255,255,0.2)";

    loginForm.style.left = "75%";
    registerForm.style.left = "-75%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
    document.querySelector(".form-container").style.height = "600px";
    document.querySelector(".form-container").style.transition = "0.5s";

})


// Register button function
registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "75%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 3 0% 0";
    document.querySelector(".form-container").style.height = "640px";
    document.querySelector(".form-container").style.transition = "0.5s";
})

function matchPassword() {
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("confirm-password").value;
    if (pw1 != pw2) {
        alert("Passwords did not match");
    }
    else if (pw1 = pw2 == 0) {
        alert("please enter a password")
    }
    else {
        alert("Password created successfully");
    }
}  
