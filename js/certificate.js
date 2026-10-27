const course = localStorage.getItem("selectedCourse");
const enrolledCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
const courseProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};

if (!course || !enrolledCourses.includes(course) || courseProgress[course] < 100) {
    alert("Complete an enrolled course before getting its certificate.");
    window.location.replace("my-courses.html");
} else {
    document.getElementById("studentName").textContent =
        localStorage.getItem("studentName") || "Student";
    document.getElementById("courseName").textContent = course;
    document.getElementById("date").textContent = new Date().toLocaleDateString();
}
