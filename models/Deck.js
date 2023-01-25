const mongoose = require('mongoose')

const Schema = mongoose.Schema

const deckSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.new
    }
})

module.exports = mongoose.model('Deck', deckSchema)