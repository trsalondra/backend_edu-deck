const Deck = require('../models/Deck')
const mongoose = require('mongoose')

// create/post a deck
const createDeck = async (req, res) => {
    const { title, description, createdBy} = req.body 

    if (!title) {
      return res.status(400).json({ error: 'Most complete title field'})
    }

    // add doc to db
    try {
        const deck = await Deck.create({ title, description, createdBy})
        res.status(200).json(deck)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// read/get all decks
const getDecks = async (req, res) => {
    const decks = await Deck.find({}).sort({ createdAt: -1 })
    res.status(200).json(decks)
}

// read/get a deck
const getDeck = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such deck' })
    }

    const deck = await Deck.findById(id)

    if (!deck) {
        res.status(404).json({ error: 'No such deck' })
    } else {
        res.status(200).json(deck)
    }
}

// update/put a deck
const updateDeck = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such deck' })
    }

    const deck = await Deck.findByIdAndUpdate({ _id: id }, {...req.body})

    if(!deck) {
        res.status(404).json({error: 'No such deck'})
    }

    res.status(200).json(deck)
}

// delete a deck
const deleteDeck = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such deck' })
    }

    const deck = await Deck.findOneAndDelete({ _id: id })

    if (!deck) {
        res.status(404).json({ error: 'No such deck' })
    }

    res.status(200).json(deck)
}

module.exports = {
    getDecks,
    deleteDeck,
    updateDeck,
    createDeck,
    getDeck
}