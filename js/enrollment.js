function enroll(course){
    if(course === ""){
        alert("Select a course");
        return;
    }


    let myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
    let courseProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};


    // remove duplicates from existing data
    myCourses = [...new Set(myCourses)];


    // add new course only if not exists
    if(!myCourses.includes(course)){
        myCourses.push(course);
    }

    if(typeof courseProgress[course] !== "number"){
        courseProgress[course] = 0;
    }


    localStorage.setItem(
        "myCourses",
        JSON.stringify(myCourses)
    );

    localStorage.setItem("courseProgress", JSON.stringify(courseProgress));
    localStorage.setItem("selectedCourse", course);


    window.location.href = "enrollment-success.html";

}

function enrollCourse(){
    const courseSelect = document.getElementById("course");
    enroll(courseSelect ? courseSelect.value : "");
}