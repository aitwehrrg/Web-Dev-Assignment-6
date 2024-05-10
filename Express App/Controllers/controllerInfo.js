const { GAME } =  require("../Models/modelsIndex.js");

function getCardsHandler(){
    const method = async (req, res, next) => {
        const gamesInfo = await GAME.find({}, { cover: 1, title: 1 });
        if(gamesInfo){
            console.log("Succesfully got information about games");
        }
        req.gamesInfo = gamesInfo;
        // console.log(typeof gamesInfo);
        next();
    }
    return method;
}

function getGameInfoHandler(){
    const method = async (req, res, next) => {
        const gameInfo = await GAME.findOne({ title: req.query.gamename }).lean();
        if(gameInfo){
            console.log(`Successfully got information about ${req.query.gamename}`);
        }
        req.gameInfo = gameInfo;
        // console.log(gameInfo.title);
        next();
    }
    return method;
}

module.exports = { getCardsHandler, getGameInfoHandler }