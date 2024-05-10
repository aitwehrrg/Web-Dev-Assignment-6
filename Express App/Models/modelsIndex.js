const mongoose = require("mongoose");

const mongoUrl = "";

mongoose
.connect('mongodb://localhost:27017/Web-Dev-Assignment-6')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));

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

    release_date: {
        type: typeof(Date()),
        required: true
    },

    genre: [
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
    },

    bg: {
        type: String
    },

    cover: {
        type: String
    }
})

const gameModel = mongoose.model("GAME", gameSchema);

module.exports = { GAME: gameModel };