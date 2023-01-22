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
        required: true
    },
    deckId: {
        type: String,
        required: true
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