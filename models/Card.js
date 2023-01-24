const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        default: "101"
    },
    deckId: {
        type: String,
        default: "201"
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

module.exports = mongoose.model('Card', cardSchema)