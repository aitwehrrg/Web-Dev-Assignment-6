const { GAME } =  require("../Models/modelsIndex.js");

function getCardsHandler(){
    const method = async (req, res, next) => {
        const gamesInfo = await GAME.find({});
        if(gamesInfo){
            console.log("Succesfully got information about games");
        }
        req.gamesInfo = gamesInfo;
        // console.log(typeof gamesInfo);
        next();
    }
    return method;
}

module.exports = { getCardsHandler }