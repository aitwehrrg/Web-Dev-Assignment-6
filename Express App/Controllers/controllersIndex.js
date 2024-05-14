const { getCardsHandler, getGameInfoHandler } = require("./controllerInfo");

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
        res.render("game-name", { gameInfo: req.gameInfo });
        res.end();
    }
    return method;
}

function getAboutHandler(){
    const method = (req, res) => {
        console.log("About Page");
        res.render("about-page");
        res.end();
    }
    return method;
}

module.exports = { getHomeHandler, getGameHandler, getCardsHandler, getGameInfoHandler, getAboutHandler };
