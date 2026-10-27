document.addEventListener("DOMContentLoaded", () => {
    const courses = JSON.parse(localStorage.getItem("myCourses")) || [];
    const courseProgress = getCourseProgress();
    const list = document.getElementById("myList");

    if (!courses.length) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "my-course-empty";
        emptyMessage.textContent = "You haven't enrolled in any courses yet.";
        list.appendChild(emptyMessage);
        return;
    }

    courses.forEach((course) => {
        const progress = courseProgress[course] || 0;
        const isComplete = progress >= 100;
        const item = document.createElement("li");
        item.className = "my-course-item";

        const title = document.createElement("h3");
        title.textContent = course;

        const progressLabel = document.createElement("p");
        progressLabel.textContent = progress + "% Completed";

        const progressBar = document.createElement("progress");
        progressBar.max = 100;
        progressBar.value = progress;
        progressBar.setAttribute("aria-label", course + " progress");

        const actions = document.createElement("div");
        actions.className = "my-course-actions";

        const continueLink = document.createElement("a");
        continueLink.href = "progress.html";
        continueLink.className = "btn btn-accent";
        continueLink.textContent = isComplete ? "View Progress" : "Continue Course";
        continueLink.addEventListener("click", () => {
            localStorage.setItem("selectedCourse", course);
        });
        actions.appendChild(continueLink);

        if (isComplete) {
            const certificateLink = document.createElement("a");
            certificateLink.href = "certificate.html";
            certificateLink.className = "btn btn-outline";
            certificateLink.textContent = "Get Certificate";
            certificateLink.addEventListener("click", () => {
                localStorage.setItem("selectedCourse", course);
            });
            actions.appendChild(certificateLink);
        }

        item.append(title, progressBar, progressLabel, actions);
        list.appendChild(item);
    });
});
