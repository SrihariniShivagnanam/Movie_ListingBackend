const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { movieId, seatNumber } = req.body;
  res.json({ message: "Ticket booked successfully!", movieId, seatNumber });
});

module.exports = router;