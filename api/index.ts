const express = require("express");
const path = require("path");
// const ejs = require("ejs");

//Get Router
const { routingHome, routingGame, routingAbout } = require("./Express App/Routes/routeIndex");

//Express App
const app = express();
app.use(express.static("./views/"));
app.use(express.static("./views/Styles/"));
app.use(express.static("./views/Scripts/"));
app.use(express.static("./views/Fonts/"));
app.use(express.static("./views/Images/"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views/"));

//================================= Console methods for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
//=================================

app.use("/", routingHome);
app.use("/home", routingHome);
app.use("/game", routingGame);
app.use("/about", routingAbout);

//================================= Console methods for debugging
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
//=================================

app.listen(8000, () => {
    console.log("Server Started at PORT 8000");
});
