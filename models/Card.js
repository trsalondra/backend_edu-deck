const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    deckId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deck"
    },
    correctCount: {
        type: Number,
        default: 0
    },
    testCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model("Card", cardSchema)