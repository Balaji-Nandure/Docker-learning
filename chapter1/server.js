const express = require("express");

const app = express();

// Use PORT environment variable if provided.
// Otherwise default to 3000.
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});