const { GAME } =  require("../Models/modelsIndex.js");

function getHomeHandler(){
    const method = (req, res) => {
        console.log("Home Page");
        res.render("index", { numCards: 20 });
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

module.exports = { getHomeHandler, getGameHandler };