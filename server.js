require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const deckRoutes = require('./routes/decks')
const cardRoutes = require('./routes/cards')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
app.use(cors({ origin: '*' })) 

// routes
app.use('/api/decks', deckRoutes)
app.use('/api/cards', cardRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })