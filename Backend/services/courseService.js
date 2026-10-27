const { randomUUID } = require("crypto");
const courses = require("../data/courses");

function notFound() {
  const error = new Error("Course not found");
  error.statusCode = 404;
  return error;
}

function getAllCourses() {
  return courses;
}

function getCourseById(id) {
  const course = courses.find((c) => c.id === id);
  if (!course) throw notFound();
  return course;
}

function createCourse({ name, duration, instructor, description }) {
  const course = {
    id: randomUUID(),
    name: name.trim(),
    duration: (duration || "").trim(),
    instructor: (instructor || "").trim(),
    description: (description || "").trim(),
  };
  courses.push(course);
  return course;
}

function updateCourse(id, updates) {
  const course = getCourseById(id);
  ["name", "duration", "instructor", "description"].forEach((key) => {
    if (typeof updates[key] === "string") course[key] = updates[key].trim();
  });
  return course;
}

function deleteCourse(id) {
  const index = courses.findIndex((c) => c.id === id);
  if (index === -1) throw notFound();
  return courses.splice(index, 1)[0];
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
