// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// URL Masking for SEO
app.get("/tourpackages/tourdetail/page", (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.status(400).send("Tour ID is missing");
  }
  res.redirect(`/tourdetails/tour/${id}`);
});

// Original React Route
app.get("/tourdetails/tour/:id", (req, res) => {
  res.send(`Tour Details for ID: ${req.params.id}`);
});

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
