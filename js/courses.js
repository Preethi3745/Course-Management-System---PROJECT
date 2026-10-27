// courses.js

document.addEventListener('DOMContentLoaded', loadCourses);

function getCourses() {
    return JSON.parse(localStorage.getItem('courses')) || [];
}

function saveCourses(courses) {
    localStorage.setItem('courses', JSON.stringify(courses));
}

function loadCourses() {
    const courses = getCourses();
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    if (courses.length === 0) {
        courseList.innerHTML = '<tr><td colspan="2">No courses added yet.</td></tr>';
        return;
    }

    courses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course}</td>
            <td><button onclick="removeCourse(${index})">Remove</button></td>
        `;
        courseList.appendChild(row);
    });
}

function removeCourse(index) {
    const courses = getCourses();
    courses.splice(index, 1);
    saveCourses(courses);
    loadCourses();
}