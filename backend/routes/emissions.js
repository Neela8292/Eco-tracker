const express = require("express");
const router = express.Router();

// POST: Calculate emissions
router.post("/", (req, res) => {
  const { transport, electricity, meat } = req.body;

  const transportFactor = 0.21;
  const electricityFactor = 0.92;
  const meatFactor = 5;

  const totalEmission =
    (transport * transportFactor) +
    (electricity * electricityFactor) +
    (meat * meatFactor);

  res.json({ totalEmission });
});

module.exports = router;
