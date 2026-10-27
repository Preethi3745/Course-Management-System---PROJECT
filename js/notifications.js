let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

let list = document.getElementById("n");

list.innerHTML = "";

if (notifications.length === 0) {

    list.innerHTML = "<li>No New Notifications</li>";

} else {

    notifications.forEach(msg => {

        list.innerHTML += `<li>${msg}</li>`;

    });

}