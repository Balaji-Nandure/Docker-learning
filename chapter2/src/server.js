// Import Express.
const express = require("express");

// Import our users router.
const usersRouter = require("./routes/users");

// Create Express application.
const app = express();

// Read PORT from environment variables.
// If PORT doesn't exist, use 3000.
const PORT = process.env.PORT || 3000;

// Enable JSON request body parsing.
//
// Without this, req.body will not automatically contain
// JSON sent by the client.
app.use(express.json());

// Register users routes.
//
// Any request beginning with /users
// will be handled by usersRouter.
app.use("/users", usersRouter);

// Basic health-check endpoint.
//
// This is commonly used by Docker/orchestrators/load balancers
// to determine whether an application is responding.
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

// Start the HTTP server.
//
// 0.0.0.0 is important inside Docker because it allows
// connections through the container's network interface.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});