const db = require("../db/index.js"),
	colorado = {};

colorado.newPalette = (req, res, next) => {
	console.log("OOKKK", req.body);
	// db
	// 	.one(
	// 		"INSERT INTO itinerary(name, city, date_departing, date_returning, budget,user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
	// 		[
	// 			req.body.name,
	// 			req.body.city,
	// 			req.body.date_departing,
	// 			req.body.date_returning,
	// 			req.body.budget,
	// 			req.body.user_id
	// 		]
	// 	)
	// 	.then(id => {
	// 		res.locals.itineraryId = id;
	// 		next();
	// 	});
};

module.exports = colorado;
