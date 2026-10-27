let courses =
JSON.parse(localStorage.getItem("courses")) || [];


let index =
localStorage.getItem("editIndex");



let course = courses[index];



document.getElementById("editName").value =
course.name;


document.getElementById("editDuration").value =
course.duration;


document.getElementById("editInstructor").value =
course.instructor;


document.getElementById("editDescription").value =
course.description;




function updateCourse(){


courses[index]={

name:
document.getElementById("editName").value,


duration:
document.getElementById("editDuration").value,


instructor:
document.getElementById("editInstructor").value,


description:
document.getElementById("editDescription").value

};



localStorage.setItem(
"courses",
JSON.stringify(courses)
);



alert("Course Updated");


window.location.href="courses.html";


}