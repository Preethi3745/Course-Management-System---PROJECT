const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  validateCourse,
  validateCourseUpdate,
} = require("../middleware/courseValidation");

// Public
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

// Require a valid JWT for changes.
router.post("/", authenticateToken, validateCourse, courseController.createCourse);
router.put("/:id", authenticateToken, validateCourseUpdate, courseController.updateCourse);
router.delete("/:id", authenticateToken, courseController.deleteCourse);

module.exports = router;