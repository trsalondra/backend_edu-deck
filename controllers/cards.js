const Card = require('../models/Card')
const mongoose = require('mongoose')

// create/post a card
const createCard = async (req, res) => {
    const { front, back, createdBy, deckId} = req.body 

    if (!front || !back) {
      return res.status(400).json({ error: 'Must complete both fields'})
    }

    // add doc to db
    try {
        const card = await Card.create({ front, back, createdBy, deckId })
        res.status(200).json(card)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// read/get all cards
const getCards = async (req, res) => {
    const cards = await Card.find({}).sort({ createdAt: -1 })
    res.status(200).json(cards)
}

// read/get a card
const getCard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such card' })
    }

    const card = await Card.findById(id)

    if (!card) {
        res.status(404).json({ error: 'No such card' })
    } else {
        res.status(200).json(card)
    }
}

// update/put a card
const updateCard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such card' })
    }

    const card = await Card.findByIdAndUpdate({ _id: id }, {...req.body})

    if(!card) {
        res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}

// delete a card
const deleteCard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such card' })
    }

    const card = await Card.findOneAndDelete({ _id: id })

    if (!card) {
        res.status(404).json({ error: 'No such card' })
    }

    res.status(200).json(card)
}

module.exports = {
    getCards,
    deleteCard,
    updateCard,
    createCard,
    getCard
}