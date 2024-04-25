const express = require("express");
const { getHomeHandler, getGameHandler } = require("../Controllers/controllersIndex");

const routingHome = express();
const routingGame = express();

routingHome.get("/", getHomeHandler());

routingGame.get("/:varGame", getGameHandler());

module.exports = { routingHome, routingGame };
