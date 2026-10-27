function getCourseCatalog() {
    return JSON.parse(localStorage.getItem("courses")) || [];
}

function addCourse(event) {
    if (event) {
        event.preventDefault();
    }

    const nameInput = document.getElementById("cname") || document.getElementById("courseName");
    const name = nameInput ? nameInput.value.trim() : "";
    const message = document.getElementById("msg");

    if (!name) {
        if (message) {
            message.textContent = "Enter a course name.";
        }
        return;
    }

    const courses = getCourseCatalog();
    courses.push({
        name,
        duration: document.getElementById("duration")?.value.trim() || "",
        instructor: document.getElementById("instructor")?.value.trim() || "",
        description: document.getElementById("description")?.value.trim() || ""
    });
    localStorage.setItem("courses", JSON.stringify(courses));

    if (message) {
        message.textContent = "Course added successfully.";
    }
    if (nameInput) {
        nameInput.value = "";
    }
    renderAddedCourses();
}

function renderAddedCourses() {
    const list = document.getElementById("myCoursesList");
    if (!list) {
        return;
    }

    list.replaceChildren();
    getCourseCatalog().forEach((course) => {
        const item = document.createElement("li");
        item.textContent = typeof course === "string" ? course : course.name;
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addCourseForm");
    if (form) {
        form.addEventListener("submit", addCourse);
    }
    renderAddedCourses();
});
