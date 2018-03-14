const db = require("../db/index.js"),
	colorado = {};

colorado.newPalette = (req, res, next) => {
	console.log("OOKKK", req.body);
	db
		.one(
			"INSERT INTO colorado(name, first,second,third,fourth,fifth,sixth) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *",
			[
				req.body.paletteName,
				req.body.currentSwatches[0].color,
				req.body.currentSwatches[1].color,
				req.body.currentSwatches[2].color,
				req.body.currentSwatches[3].color,
				req.body.currentSwatches[4].color,
				req.body.currentSwatches[5].color
			]
		)
		.then(palette => {
			res.locals.palette = palette;
			next();
		})
		.catch(error => {
			console.log(
				"error encountered in colorado.newPalette. Error",
				error
			);
			next(error);
		});
};

colorado.getPalettes = (req, res, next) => {
	db
		.manyOrNone(`SELECT * FROM colorado;`)
		.then(palettes => {
			console.log("GOT!", palettes);
			res.locals.palettes = palettes;
			next();
		})
		.catch(error => {
			console.log(
				"error encountered in colorado.getPalettes. Error",
				error
			);
			next(error);
		});
};
colorado.deletePalette = (req, res, next) => {
	db
		.manyOrNone(
			`DELETE FROM colorado WHERE id = ${req.body.palette.id} RETURNING *`
		)
		.then(palette => {
			res.locals.palette = palette;
			next();
		})
		.catch(error => {
			console.log(
				"error encountered in colorado.deletePalette. Error",
				error
			);
			next(error);
		});
};
module.exports = colorado;
