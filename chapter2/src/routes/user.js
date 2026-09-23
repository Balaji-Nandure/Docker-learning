const express = require("express");

// Create a router.
// A router lets us separate API endpoints into different files.
const router = express.Router();

// Temporary in-memory data.
//
// This is only for practice.
// In a real application, users would normally come from
// a database such as PostgreSQL or MongoDB.
const users = [
  {
    id: 1,
    name: "Balaji",
  },
  {
    id: 2,
    name: "Rahul",
  },
];

// GET /users
//
// Returns all users.
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id
//
// Example:
// GET /users/1
//
// req.params.id contains "1".
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});

// Export router so server.js can use it.
module.exports = router;