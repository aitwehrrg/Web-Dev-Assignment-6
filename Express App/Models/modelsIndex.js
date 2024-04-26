const mongoose = require("mongoose");

const mongoUrl = "";

mongoose.connect(mongoUrl);

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    developer: {
        type: String,
        required: true
    },

    publisher: {
        type: String,
        required: true
    },

    platforms: [
        {platformName: { type: String, required: true }}
    ],

    //   "release_date": Not required,
    genres: [
        {genreName: {type: String, required: true}}
    ],

    modes: [
        {modeName: { type: String, required: true}}
    ],

    description: {
        type: String,
        required: true
    },

    website: {
        type: String
    }

    //   "genre": ["Metroidvania", "Platformer"],
    //   "modes": ["Single-player"],
    //   "description": "Hollow Knight is a challenging, beautiful action-adventure game set in the vast, interconnected underground kingdom of Hallownest. Explore twisting caverns, ancient cities, and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom's heart.",
    //   "website": "https://hollowknight.com/"
})

const gameModel = mongoose.model("GAME", gameSchema);

module.exports = { GAME: gameModel };