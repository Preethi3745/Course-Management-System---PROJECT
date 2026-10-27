function errorMiddleware(err, req, res, next) {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON body" });
  }

  const statusCode = err.statusCode || 500;

  if (statusCode === 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    message: statusCode === 500 ? "Internal server error" : err.message,
  });
}

module.exports = errorMiddleware;