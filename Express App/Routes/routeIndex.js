const express = require("express");
const { getHomeHandler, getGameHandler, getCardsHandler, getGameInfoHandler, getAboutHandler } = require("../Controllers/controllersIndex");

const routingHome = express();
const routingGame = express();
const routingAbout = express();

routingHome.get("/", getCardsHandler(), getHomeHandler());

routingGame.get("/", getGameInfoHandler(), getGameHandler());

routingAbout.get("/", getAboutHandler());

module.exports = { routingHome, routingGame, routingAbout };
