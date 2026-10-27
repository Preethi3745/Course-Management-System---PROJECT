require("dotenv").config();

const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// Existing course route mount:
app.use("/api/v1/courses", courseRoutes);

// Authentication route mount:
app.use("/api/v1/auth", authRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});