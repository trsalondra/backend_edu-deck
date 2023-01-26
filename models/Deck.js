const mongoose = require('mongoose')

const Schema = mongoose.Schema

const deckSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: false
    },
    userId: { 
        type: String,
        required: false // will require when implementing auth
    },
    createdAt: {
        type: Date,
        default: Date.new
    }
})

module.exports = mongoose.model('Deck', deckSchema)