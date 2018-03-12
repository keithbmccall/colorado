const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const cors = require("cors");
// const tokenService = require("./services/TokenService");
// const authService = require("./services/AuthService");
const path = require("path");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
// app.use(tokenService.receiveToken);
app.use(express.static(__dirname + "/public/build"));

app.use(bodyParser.urlencoded({ extended: false }));

const coloradoRoutes = require("./controllers/colorado.js");
app.use("/api/colorado", coloradoRoutes);

//TAKEN FROM AUTH RESTRICT REACT LESSON
// const userRouter = require("./controllers/users");
// app.use("/users", userRouter);

// app.get("/isLoggedIn", authService.isLoggedIn, (req, res) => {
// 	res.json({
// 		isLoggedIn: res.locals.isLoggedIn,
// 		user: res.locals.user
// 	});
// });
//
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});
