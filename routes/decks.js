const express = require('express')
const deckConroller = require('../controllers/decks')
const router = express.Router()

// CREATE
router.post('/create-deck', deckConroller.createDeck)

// READ/INDEX
router.get('/', deckConroller.getDecks)

// READ/SHOW
router.get('/:id', deckConroller.getDeck)

// UPDATE
router.put('/:id', deckConroller.updateDeck)

// DELETE
router.delete('/:id', deckConroller.deleteDeck)

module.exports = router