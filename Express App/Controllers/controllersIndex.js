const { getCardsHandler } = require("./controllerInfo");

function getHomeHandler(){
    const method = (req, res) => {
        console.log("Home Page");
        res.render("index", { numCards: 20 , gamesInfo: req.gamesInfo});
        res.end();
    }
    return method;
}

function getGameHandler(){
    const method = (req, res) => {
        console.log("Game Page");
        res.render("game-name");
        res.end();
    }
    return method;
}

module.exports = { getHomeHandler, getGameHandler, getCardsHandler };
