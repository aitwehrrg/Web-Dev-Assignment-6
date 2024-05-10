const express = require("express");
const { getHomeHandler, getGameHandler, getCardsHandler, getGameInfoHandler } = require("../Controllers/controllersIndex");

const routingHome = express();
const routingGame = express();

routingHome.get("/", getCardsHandler(), getHomeHandler());

routingGame.get("/", getGameInfoHandler(), getGameHandler());

module.exports = { routingHome, routingGame };
