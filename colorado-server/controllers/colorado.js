const express = require("express"),
	router = express(),
	colorado = require("../models/colorado.js");

// ----------------------------------------------------
// Define GET request for '/dashboard', which is ALL
// noWanderModel.getAllItineraries
// This is _______ job
router.post("/", colorado.newPalette, (req, res) => {
	const { palette } = res.locals;
	res.json({ palette });
});
router.get("/", colorado.getPalettes, (req, res) => {
	const { palettes } = res.locals;
	res.json({ palettes });
});
module.exports = router;
