function getCourseProgress() {
    return JSON.parse(localStorage.getItem("courseProgress")) || {};
}

function getSelectedCourse() {
    const enrolledCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
    const selectedCourse = localStorage.getItem("selectedCourse");

    if (selectedCourse && enrolledCourses.includes(selectedCourse)) {
        return selectedCourse;
    }

    return enrolledCourses[0] || "";
}

function updateProgressUI() {
    const course = getSelectedCourse();
    const courseName = document.getElementById("courseName");
    const progressBar = document.getElementById("p");
    const progressText = document.getElementById("progressText");
    const completeButton = document.getElementById("completeCourse");
    const certificateLink = document.getElementById("certificateLink");
    const progress = getCourseProgress();
    const value = course ? (progress[course] || 0) : 0;
    const isComplete = value >= 100;

    if (courseName) {
        courseName.textContent = course || "No course selected";
    }
    if (progressBar) {
        progressBar.value = value;
    }
    if (progressText) {
        progressText.textContent = value + "% Completed";
    }
    if (completeButton) {
        completeButton.disabled = !course || isComplete;
        completeButton.textContent = isComplete ? "Course Completed" : "Finish Course";
    }
    if (certificateLink) {
        certificateLink.hidden = !isComplete;
    }
}

function update() {
    const course = getSelectedCourse();
    if (!course) {
        alert("Enroll in a course before updating progress.");
        return;
    }

    const progress = getCourseProgress();
    progress[course] = 100;
    localStorage.setItem("courseProgress", JSON.stringify(progress));
    updateProgressUI();
}

document.addEventListener("DOMContentLoaded", updateProgressUI);
