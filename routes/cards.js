const express = require('express')
const cardConroller = require('../controllers/cards')
const router = express.Router()

// CREATE
router.post('/', cardConroller.createCard)

// SHOW ALL
router.get('/', cardConroller.getCards)

// SHOW DECK
router.get('/deck/:deckId', cardConroller.getCardsByDeckId)

// DECK COUNT
router.get('/count/:deckId', cardConroller.getCardCountByDeckId)

// SHOW ONE
router.get('/:id', cardConroller.getCard)

// UPDATE
router.put('/:id', cardConroller.updateCard)

// DELETE
router.delete('/:id', cardConroller.deleteCard)

module.exports = router