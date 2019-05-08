const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //Parse incoming request bodies in a middleware before handlers
const app = express();
const passport = require("passport");
const router = express.Router()

const mongoDBConnectionString = require("./keys/keys").mongoURI;

// const loginUser = require("./routes/api/login");
// const registerUser = require("./routes/api/register");

const users = require("./routes/api/users")

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Use passport middleware and configure it
app.use(passport.initialize());
require("./jwt/passport")(passport); //Needs more passports!! TODO: Create better structure

// Database configuration. TODO: Maybe don't use .env to store mongo connection to it?? :-[
const mongoDatabase = mongoDBConnectionString;
// Connect to MongoDB
mongoose
    .connect(
        mongoDatabase,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Routes - Maybe merge them??
// app.use("/api/login", loginUser);
// app.use("/api/register", registerUser);

// Merged routes
app.use("/api/users", users)


const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));