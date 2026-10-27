document.addEventListener("DOMContentLoaded", function () {

    // REGISTER
    let registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let user = {
                name: name,
                email: email,
                password: password
            };

            localStorage.setItem(email, JSON.stringify(user));

            alert("Registered Successfully");
            window.location.href = "login.html";
        });
    }

    // LOGIN
    let loginForm = document.getElementById("loginform");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                localStorage.setItem("currentUser", user.name);
                alert("Login Successful");
                window.location.href = "student-dashboard.html";
            } else {
                alert("Invalid Email or Password");
            }
        });
    }

});


