const { GAME } =  require("../Models/modelsIndex.js");

function getHomeHandler(){
    const method = (req, res) => {
        res.write("Home Page");
        res.end();
    }
    return method;
}

function getGameHandler(){
    const method = (req, res) => {
        const gameName = req.params.varGame;
        res.write(`Game Page for Game: ${gameName}`);
        res.end();
    }
    return method;
}

module.exports = { getHomeHandler, getGameHandler };