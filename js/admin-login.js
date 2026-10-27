function adminLogin(){

    let username = document.getElementById("adminUser").value;

    let password = document.getElementById("adminPass").value;

    if(username === "admin" && password === "admin123"){

        localStorage.setItem("admin", "true");

        window.location.href = "admin-dashboard.html";

    }
    else{

        document.getElementById("msg").innerHTML =
        "Invalid Username or Password";

    }

}