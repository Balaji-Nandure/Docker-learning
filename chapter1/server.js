// Import the Express library.
const express = require("express");

// Create an Express application.
const app = express();

// We will run our server on port 3000 inside the container.
const PORT = 3000;

// Create a simple GET route.
app.get("/", (req, res) => {
  res.send("docker is working!2");
});

// Start the server.
//
// Important:
// We use "0.0.0.0" instead of only localhost.
//
// Why?
// Because inside Docker, binding only to 127.0.0.1 can make
// the application inaccessible from outside the container.
//
// 0.0.0.0 means:
// "Listen on all available network interfaces."
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});