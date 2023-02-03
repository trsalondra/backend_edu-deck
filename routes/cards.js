const router = require('express').Router()
const cardConroller = require('../controllers/cards')


// CREATE
router.post('/', cardConroller.createCard)

// SHOW ALL
router.get('/', cardConroller.getCards)

// SHOW DECK
router.get('/deck/:deckTitle', cardConroller.getCardsByDeckTitle)

// DECK COUNT
router.get('/count/:deckTitle', cardConroller.getCardCountByDeckTitle)

// DECK ALL CARDS IN A DECK
router.delete('/deletedeck/:deckTitle', cardConroller.deleteCardsByDeckTitle)

// SHOW ONE
router.get('/:id', cardConroller.getCard)

// UPDATE
router.put('/:id', cardConroller.updateCard)

// DELETE
router.delete('/:id', cardConroller.deleteCard)

module.exports = router