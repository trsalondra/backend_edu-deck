const express = require('express')
const deckConroller = require('../controllers/decks')
const router = express.Router()

// CREATE
router.post('/', deckConroller.createDeck)

// READ/INDEX
router.get('/', deckConroller.getDecks)

// DECK COUNT
router.get('/count/:title', deckConroller.countDeck)

// READ/SHOW
router.get('/:id', deckConroller.getDeck)

// UPDATE
router.put('/:id', deckConroller.updateDeck)

// DELETE
router.delete('/:id', deckConroller.deleteDeck)



module.exports = router