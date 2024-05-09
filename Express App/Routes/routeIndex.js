const express = require("express");
const { getHomeHandler, getGameHandler, getCardsHandler } = require("../Controllers/controllersIndex");

const routingHome = express();
const routingGame = express();

routingHome.get("/", getCardsHandler(), getHomeHandler());

routingGame.get("/", getGameHandler());

module.exports = { routingHome, routingGame };
