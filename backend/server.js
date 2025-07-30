const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const emissionsRoutes = require("./routes/emissions");

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("<h1>Eco Tracker API is running!</h1>");
});

// Use emissions routes
app.use("/api/emissions", emissionsRoutes);

// Start server
const PORT = 5001;
app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
