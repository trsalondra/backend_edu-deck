const router = require('express').Router()
const deckConroller = require('../controllers/decks')

// CREATE
router.post('/', deckConroller.createDeck)

// SHOW ALL
router.get('/', deckConroller.getDecks)

// DECK COUNT
router.get('/count/:title', deckConroller.countDeck)

// SHOW ONE
router.get('/:id', deckConroller.getDeck)

// UPDATE
router.put('/:id', deckConroller.updateDeck)

// DELETE
router.delete('/:id', deckConroller.deleteDeck)



module.exports = router