const express = require("express");

//Get Router
const { routingHome, routingGame } = require("./Express App/Routes/routeIndex");

//Express App
const app = express();

//================================= Console methods for debugging
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });
//=================================

app.use("/home", routingHome);
app.use("/game", routingGame);

//================================= Console methods for debugging
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });
//=================================

app.listen(8000, () => {
    console.log("Server Started at PORT 8000");
});
