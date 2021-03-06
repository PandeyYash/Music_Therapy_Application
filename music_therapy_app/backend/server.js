const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./Routes/api/users");
const app = express();

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// DB Config
const db = require("./Config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./Config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () =>
	console.log(`Server is up and running on port ${port} !`)
);
