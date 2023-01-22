const express = require('express')
const cardConroller = require('../controllers/cards')
const router = express.Router()

// CREATE
router.post('/create-card', cardConroller.createCard)

// READ/INDEX
router.get('/', cardConroller.getCards)

// READ/SHOW
router.get('/:id', cardConroller.getCard)

// UPDATE
router.put('/:id', cardConroller.updateCard)

// DELETE
router.delete('/:id', cardConroller.deleteCard)

module.exports = router