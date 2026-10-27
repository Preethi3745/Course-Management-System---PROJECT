function validateCourse(req, res, next) {
  const { name } = req.body || {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ message: "Course name is required" });
  }

  next();
}

function validateCourseUpdate(req, res, next) {
  const { name } = req.body || {};

  if (name !== undefined && (typeof name !== "string" || !name.trim())) {
    return res.status(400).json({ message: "Course name cannot be empty" });
  }

  next();
}

module.exports = { validateCourse, validateCourseUpdate };